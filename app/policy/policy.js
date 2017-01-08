app.controller('policy', ["$scope", "$mdSidenav", "policyData", "channelData",  "$state", "$http", "$mdDialog",

    function ($scope, $mdSidenav, policyData, channelData, $state, $http, $mdDialog) {

        var self = this;


        self.sidenav_edit_mode = false;
        self.test = "valie"
        self.show_success_dialog = function (message) {
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Success')
                .textContent(message)
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
            );
        }
        self.show_error_dialog = function (message, errorMessage) {
            var str = message + " : " + errorMessage
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Error')
                .textContent(str)
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
            );
        }

        policyData.getSidenav().then(function (answer) {
                self.sideNavList = answer.data
                    //getting the first item of the list to launch API call
                self.policyId = self.sideNavList[0].PolicyId
                self.getPolicyInfo(self.policyId)

            })
            //________________________MAIN CALL ____________________________________________________///////////

        self.getPolicyInfo = function (id) {
            policyData.get_policy_info(id).then(function (answer) {
                self.policy = answer.data
                self.PolicyFacets = self.policy.PolicyFacets
                self.detection = answer.data.PolicyInfo.FileDetectionConfigurations
                policyData.getCDRFacets().then(function (answer) {
                    self.cdr = answer.data
                    angular.forEach(self.cdr['Policy CDR Settings'].Properties, function (value, key) {

                        //making the match between self.cdr and self.policyFacets.defaultValue


                        if (self.PolicyFacets['Policy CDR Settings'].Values[key] == undefined || self.PolicyFacets['Policy CDR Settings'].Values[key] === "") {
                            self.PolicyFacets['Policy CDR Settings'].Values[key] = value.DefaultValue[0]

                        } else {
                            var splittedByPipe = self.PolicyFacets['Policy CDR Settings'].Values[key].split("|")
                                var object = {}

                            angular.forEach(splittedByPipe, function (L2Val, L2Key) {
                                var splittedByEqual = L2Val.split("=")
                                object[splittedByEqual[0]] = splittedByEqual[1]

                            })
                            
                            self.PolicyFacets['Policy CDR Settings'].Values[key] = object

                        }
                    })

                })
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
                }, function (cancel) {})
        }

        /*__________________________  CDR // SETTINGS _____________ _____________ */
        self.formatStrings = function (obj) {}


        //settings not editable by default
        self.areSettingsEditable = false;
        //this function is called through directive to allow further DOM manipulations
        self.post_policy_settings = function (values) {
            //formatting dict to list
            var postData = []
            angular.forEach(values, function (v, k) {
                this.push({
                    "Description": k,
                    "Values": v['Values']
                })
            }, postData);
            //posting the list
            policyData.post_policy_settings(self.policyId, postData).then(function (success) {
                self.show_success_dialog("Your changes were successfuly saved")
            }, function (error) {
                self.show_error_dialog("An error occured while saving your changes : ", error.data.Message)
            })
        }
        self.cdrFacets = [];

        self.DeleteAction = function (key, L0Key) {

            delete self.PolicyFacets['Policy CDR Settings'].Values[L0Key][key]

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
app.filter('filterObject', function () {
    return function (input, search) {
        if (!input) return input;
        if (!search) return input;
        var expected = ('' + search).toLowerCase();
        var result = {};
        angular.forEach(input, function (value, key) {
            var actual = ('' + value).toLowerCase();
            if (actual.indexOf(expected) !== -1) {
                result[key] = value;
            }
        });
        return result;
    }
});
app.filter("splitter", function () {
    return function (string, char, index) {
        if (string == undefined || string === "" || string == null) {
            return
        }
        var splitted = string.split(char)[index]
        string = splitted.split(/(?=[A-Z])/).join(" ");
        return string
    }
})