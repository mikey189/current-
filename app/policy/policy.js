app.controller('policy', ["$scope", "$mdSidenav", "policyData", "channelData", "policyUsers", "$state", "$http", "$mdDialog",

    function ($scope, $mdSidenav, policyData, channelData, policyUsers, $state, $http, $mdDialog) {
        var self = this;

        self.sidenav_edit_mode = false;

        policyData.getSidenav().then(function (answer) {
            self.sideNavList = answer.data
                //getting the first item of the list to launch API call
            self.policyId = self.sideNavList[0].PolicyId
            self.getPolicyInfo(self.policyId)

        })

        self.getPolicyInfo = function (id) {
            policyData.get_policy_info(id).then(function (answer) {
                self.policy = answer.data
            })
        }
        self.PolicyInfo = {};
        self.newPolicy = false;
        self.isEditable = false;
        self.is_policy_sidenav_editable = false;
        //getDashboard data with policyId
        //API Call inside directive :"initiateApiCallWithId" 
        //filetypes
        //getting filetypes
        //initiate the channel ids to send
        self.channelIds = [];
        policyData.getFiletypes().then(function (answer) {
                self.filetype = answer.data
            })
            //creating object to store properties and all changes
        self.types = {};
        //settings default values for DOM Manipulations
        self.areExtensionsVisible = [];
        self.isAdvancedModeOn = false;
        self.isTableEditable = false;

        //getting list of scanners for policy defintion
        policyData.get_fireEye_servers().then(function (answer) {
            self.fireEye_servers_list = answer.data
        })
        policyData.get_cukoo_servers().then(function (answer) {
            self.cukoo_servers_list = answer.data
        })

        policyData.get_policy_info(self.policyId).then(function (answer) {
                self.policy_general_info = answer.data
                self.detection = self.policy_general_info.PolicyInfo.FileDetectionConfigurations
                self.types = self.policy_general_info.PolicyInfo.FileTypesConfigurations
            })
            //who > computers -> retrieving data from relevant service ( channelData )


        /*______________________________________settings______________________________________*/


         self.allFacets = {};
        policyData.get_policy_settings("PolicySettings").then(function (answer) {
            var data = answer.data;
            self.allFacets = data;
        });

        self.open_second_modal = function (ev, key, propkey, propValue) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: "app/policy/templates/policyDefinition/templates/settings/tree_values/tree_values.html",
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: true,
                    locals: {
                        key: key,
                        propkey: propkey,
                        propValue: propValue
                    }
                })
                /*
                when we open the dialog, we store all the element inside an object that sits on the $scope of the dialog ($scope.policyFacets)
                then when we close the dialog : we re-inject the extensions oject where it belongs using it's key and propkey
                it knows key and propkey because we inject them inside the HTML when passing the function
                */
                .then(function (success) {
                    self.PolicyFacets[key].Values[propkey] = success
                }, function (cancel) {
                    console.log("cancel")
                    console.log(cancel)
                })
        }

        /*__________________________  CDR SETTINGS _____________ _____________ */
        policyData.getCDRFacets().then(function (answer) {
            self.cdr = answer.data
        })
        self.DeleteAction = function(key, object){
            delete object[key]
        }

    }
])

// file extensions dialog controller
function DialogController($scope, $mdDialog, propValue) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.propValue = propValue;

    $scope.policyFacets = {}

    $scope.onSave = function (answer) {
        //$mdDialog.hide() resolves the promise and $mdDialog.cancel() rejects it 
        $mdDialog.hide(answer);
    };


}
app.filter('filterObject', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
    var result = {};
    angular.forEach(input, function(value, key) {
      var actual = ('' + value).toLowerCase();
      if (actual.indexOf(expected) !== -1) {
        result[key] = value;
      }
    });
    return result;
  }
});
app.filter("splitter", function(){
    return function(string, char, index){
        var splitted = string.split(char)[index]
        string = splitted.split(/(?=[A-Z])/).join(" "); 
        return string
    }
})