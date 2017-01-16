app.controller('policy', ["$scope", "$mdSidenav", "policyData", "channelData", "$state", "$http", "$mdDialog", "$timeout", function ($scope, $mdSidenav, policyData, channelData, $state, $http, $mdDialog, $timeout) {

    var self = this;
    self.sidenav_edit_mode = false;
    self.PolicyInfo = {};
    self.newPolicy = false;
    self.isEditable = false;
    self.is_policy_sidenav_editable = false;
    self.channelIds = [];
    self.types = {};
    self.FiletypeInitConditions = function () {
        self.isAdvancedModeOn = false;
        self.isTableEditable = false;
    };
    self.ComputingUnits = ["KB", "MB", "GB", "TB"];
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

    self.ToggleChildrenState = function (extension) {
        for (i in extension) {
            extension[i].isAllowed = !extension[i].isAllowed
        }
    }
    policyData.getSidenav().then(function (answer) {
            self.sideNavList = answer.data
            self.policyId = self.sideNavList[0].PolicyId
            self.getPolicyInfo(self.policyId)
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
        /*__________________________  detection  _____________ _____________ */


    /*__________________________  formatting facets for post __________________________ */
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
        console.log(postData)

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
        //________________________CDR FACETS and checking if defaultvalues are not null ___________________________

    self.getPolicyInfo = function (id) {
        policyData.get_policy_info(id).then(function (answer) {
            self.policy = answer.data
            var PolicyFacetsIfNull = {
                "Policy CDR Settings": {
                    "Values": {}
                }
            }
            self.PolicyFacets = (jQuery.isEmptyObject(self.policy.PolicyFacets)) ? PolicyFacetsIfNull : self.policy.PolicyFacets;
            self.detection = answer.data.PolicyInfo.FileDetectionConfigurations
                //file detection settings__________________________________________//

            policyData.get_policy_settings("PolicyFileDetectionSettings").then(function (answer) {
                var data = answer.data;
                self.DetectionFacets = data;
                self.InitFacets("PolicyFileDetectionSettings", "DetectionFacets");
                console.log(self.PolicyFacets)
            });
            //______________________________________retrieving CDR Facets__________________________________________//


            policyData.getCDRFacets().then(function (answer) {
                    self.cdr = answer.data
                    angular.forEach(self.cdr['Policy CDR Settings'].Properties, function (value, key) {

                        if (self.PolicyFacets['Policy CDR Settings'].Values[key] == undefined || self.PolicyFacets['Policy CDR Settings'].Values[key] === "") {
                            self.PolicyFacets['Policy CDR Settings'].Values[key] = value.DefaultValue[0]

                        } else {

                            if (self.PolicyFacets['Policy CDR Settings'].Values[key].length > 0) {
                                var splittedByPipe = self.PolicyFacets['Policy CDR Settings'].Values[key].split("|")
                                var object = {}

                                angular.forEach(splittedByPipe, function (L2Val, L2Key) {
                                    var splittedByEqual = L2Val.split("=")
                                    object[splittedByEqual[0]] = splittedByEqual[1]

                                })

                                self.PolicyFacets['Policy CDR Settings'].Values[key] = object
                            }
                        }
                    })

                })
                //______________________________________retrieving Filetypes Facets__________________________________________//

            policyData.get_policy_settings("PolicyFileTypesSettings").then(function (answer) {
                
                self.FiletypeFacets = answer.data

                /*angular.forEach(self.FiletypeFacets['Policy File Types Settings'].Properties, function (value, key) {

                    var PolicyFacetsFileTypesIfNull = {
                        "Values": {}
                    }

                    self.PolicyFacets["Policy File Types Settings"] = self.PolicyFacets["Policy File Types Settings"] || PolicyFacetsFileTypesIfNull;

                    if (self.PolicyFacets['Policy File Types Settings'].Values[key] == undefined || self.PolicyFacets['Policy File Types Settings'].Values[key] === "") {
                        var tmp = value.DefaultValue;
                        self.PolicyFacets['Policy File Types Settings'].Values[key] = value.DefaultValue[0]
                        console.log("first")
                    } else {

                        if (self.PolicyFacets['Policy File Types Settings'].Values[key].length > 0) {
                            console.log(self.PolicyFacets['Policy File Types Settings'].Values[key])
                            var splittedByPipe = self.PolicyFacets['Policy File Types Settings'].Values[key].split("|")
                            var object = {}

                            angular.forEach(splittedByPipe, function (L2Val, L2Key) {
                                var splittedByEqual = L2Val.split("=")
                                object[splittedByEqual[0]] = splittedByEqual[1]

                            })

                            self.PolicyFacets['Policy File Types Settings'].Values[key] = object
                        }
                    }

            })*/

            })

        })
    }

    self.InitFacets = function (FacetName, FacetOriginalContainerName) {
   
        console.log(FacetOriginalContainerName)
        var FacetIfNotExistant = {};

        FacetIfNotExistant = {
            "Values": {}
        };

        var FacetExistButIsEmpty = {};
        self.PolicyFacets = (jQuery.isEmptyObject(self.PolicyFacets)) ? {} : self.PolicyFacets;
        //check if we need to dive in the c-fucntion if policyFacet[facetName] exist
        //check if object contains values inside

        angular.forEach(self[FacetOriginalContainerName], function (L0Values, L0Key) {
            self.PolicyFacets[L0Key] = self.PolicyFacets[L0Key] || FacetIfNotExistant;
            self.PolicyFacets[L0Key].Values = self.PolicyFacets[L0Key].Values || FacetExistButIsEmpty;
            if (Object.keys(self.PolicyFacets[L0Key].Values).length == 0) {
                angular.forEach(L0Values.Properties, function (L1Value, L1Key) {
                    if (!L1Value.IsHidden){
                    self.PolicyFacets[L0Key].Values[L1Key] = L1Value.DefaultValue || "";

                    }
                })
            }

        })
    }



}])


/* ______________________________________   End Of controller    ______________________________________*/



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