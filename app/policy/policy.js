app.controller('policy', ["$scope", "$mdSidenav", "policyData", "channelData", "$state", "$http", "$mdDialog", "$timeout", "FacetFormatter",
    function ($scope, $mdSidenav, policyData, channelData, $state, $http, $mdDialog, $timeout, FacetFormatter) {
        var self = this;
        self.sidenav_edit_mode = false;
        self.PolicyInfo = {};
        self.newPolicy = false;
        self.isEditable = false;
        self.is_policy_sidenav_editable = false;
        self.channelIds = [];
        self.types = {};
        self.areSettingsEditable = false;
        self.allFacets = {};
        self.CustPF = {};
        self.FiletypeInitConditions = function () {
            self.isAdvancedModeOn = false;
            self.isTableEditable = false;
        };
        self.ComputingUnits = ["Kb", "Mb", "Gb", "Tb"];
        self.show_success_dialog = function (message) {
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Success')
                .textContent(message)
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
            );
        };
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
        };
        self.RefreshSidenav = function () {
            policyData.getSidenav().then(function (answer) {
                self.sideNavList = answer.data
                if (self.sideNavList.length > 0) {
                    self.NoPolicyExists = false;
                    self.policyId = $state.params.PolicyID || self.sideNavList[0].PolicyId

                } else {
                    self.NoPolicyExists = true;
                }

            })
        }
        self.RefreshSidenav();

        //delete cdr

        self.DeleteAction = function (key, L0Key) {
            delete self.PolicyFacets['Policy CDR Settings'].Values[L0Key][key]
        }

        //________________________Get policy and format it's facets ___________________________

        self.getPolicyInfo = function (id) {

                policyData.get_policy_info(id).then(function (answer) {

                    self.Filetypes = answer.data.PolicyInfo.FileTypesActionsSettings;


                    //checkbox state for parent of extensions

                    self.FiletypeIsIndeterminate = function (value) {
                        return (value.AllowOption.length !== 0 && value.AllowOption.length !== value.length);
                    }


                    // checking child state for "AllowOption" Property
                    angular.forEach(self.Filetypes, function (value, key) {
                        if (value.AllowOption == false) {
                            key.ChildrenAreNotAllAllowed = true;
                        } else {
                            key.ChildrenAreNotAllAllowed = false;
                        }
                    });

                    self.policy = answer.data;
                    var PolicyFacetsIfNull = {
                        "Policy CDR Settings": {
                            "Values": {}
                        }
                    };
                    self.PolicyFacets = (jQuery.isEmptyObject(self.policy.PolicyFacets)) ? PolicyFacetsIfNull : self.policy.PolicyFacets;
                    //__________________________________________file detection settings__________________________________________//

                    policyData.get_policy_settings("PolicyFileDetectionSettings").then(function (answer) {
                        var data = answer.data;
                        self.DetectionFacets = data;
                        self.InitFacets(self.DetectionFacets);
                    });


                    /*______________________________________settings______________________________________*/
                    policyData.get_policy_settings("PolicySettings").then(function (answer) {
                        var data = answer.data;

                        self.allFacets = data;
                        self.InitFacets(self.allFacets);

                    });

                    //______________________________________retrieving CDR Facets__________________________________________//

                    policyData.getCDRFacets().then(function (answer) {

                        self.cdrContainer = {};

                        self.cdr = answer.data;
                        self.InitFacets(self.cdr)
                            /*
                            angular.forEach(self.cdr['Policy CDR Settings'].Properties, function (value, key) {

                            if (self.PolicyFacets['Policy CDR Settings'].Values[key] == undefined || self.PolicyFacets['Policy CDR Settings'].Values[key] === "") {
                                self.PolicyFacets['Policy CDR Settings'].Values[key] = value.DefaultValue[0];

                            } else {

                                if (self.PolicyFacets['Policy CDR Settings'].Values[key].length > 0) {
                                    var splittedByPipe = self.PolicyFacets['Policy CDR Settings'].Values[key].split("|");
                                    var object = {};

                                    angular.forEach(splittedByPipe, function (L2Val, L2Key) {
                                        var splittedByEqual = L2Val.split("=");
                                        var cdrActionSplited = splittedByEqual[1].split(':');
                                        var cdrAction = {
                                            "Product": cdrActionSplited[0],
                                            "Category": cdrActionSplited[1],
                                            "ActionName": cdrActionSplited[2],
                                            "RiskLevel": cdrActionSplited[5],
                                            "Description": cdrActionSplited[3]
                                        };

                                        //var cdrAction = JSON.parse(cdrActionSplited)
                                        object[splittedByEqual[0]] = cdrAction;
                                    })
                                    self.PolicyFacets['Policy CDR Settings'].Values[key] = object
                                }
                            }
                    })*/
                    })
                })
            }
            //watching for change//
        $scope.$watch(angular.bind(this, function () {
            return this.policyId;
        }), function (newVal, oldVal) {
            if (newVal && newVal !== oldVal) {
                self.getPolicyInfo(newVal);
            }
        });

        //______________________________________Formatting Facets to display in DOM______________


        self.InitFacets = function (RetrievedData) {
            //retrieved data= facets straight from server

            angular.forEach(RetrievedData, function (L0Value, L0Key) {

                if (self.PolicyFacets[L0Key] !== undefined && self.PolicyFacets[L0Key].length !== 0) {
                    //do nothing for now
                    //policyfacets already contain definition
                    angular.forEach(L0Value.Properties, function (value, key) {

                        if (self.PolicyFacets[L0Key].Values[key] == undefined || self.PolicyFacets[L0Key].Values[key] === "") {
                            self.PolicyFacets[L0Key].Values[key] = value.DefaultValue[0];

                        } else {

                            if (self.PolicyFacets[L0Key].Values[key].length > 0) {
                                if (value.Type.includes("FacetPropertyType_MultiChoice")) {
                                    var splittedByPipe = self.PolicyFacets[L0Key].Values[key].split("|");
                                    var object = {};

                                    angular.forEach(splittedByPipe, function (L2Val, L2Key) {
                                        var splittedByEqual = L2Val.split("=");
                                        var cdrActionSplited = splittedByEqual[1].split(':');
                                        if (cdrActionSplited.length == 1) //non object type=> contain True or False
                                        {
                                            object[splittedByEqual[0]] = cdrActionSplited[0] === "True" ? true : false;
                                        } else {
                                            console.log(cdrActionSplited)


                                            var cdrAction = {
                                                "Product": cdrActionSplited[0],
                                                "Category": cdrActionSplited[1],
                                                "ActionName": cdrActionSplited[2],
                                                "RiskLevel": cdrActionSplited[3],
                                                "Description": cdrActionSplited[5]
                                            };

                                            //var cdrAction = JSON.parse(cdrActionSplited)
                                            object[splittedByEqual[0]] = cdrAction;
                                        }
                                    })
                                    self.PolicyFacets[L0Key].Values[key] = object
                                }
                            }
                        }
                    })



                    // return self.PolicyFacets[L0Key];
                } else {
                    self.PolicyFacets[L0Key] = {
                        "Values": {}
                    };
                    angular.forEach(L0Value.Properties, function (L1Value, L1Key) {
                        if (L1Value.IsHidden == false) {
                            var splittedByPipe = self.PolicyFacets[L0Key].Values[L1Key].split("|");
                            var object = {};

                            angular.forEach(splittedByPipe, function (L2Val, L2Key) {
                                var splittedByEqual = L2Val.split("=");
                                var cdrActionSplited = splittedByEqual[1].split(':');
                                if (cdrActionSplited.length == 1) //non object type=> contain True or False
                                {
                                    object[splittedByEqual[0]] = cdrActionSplited[0] === "True" ? true : false;
                                } else {

                                    console.log(cdrActionSplited)
                                    var cdrAction = {
                                        "Product": cdrActionSplited[0],
                                        "Category": cdrActionSplited[1],
                                        "ActionName": cdrActionSplited[2],
                                        "RiskLevel": cdrActionSplited[3],
                                        "Description": cdrActionSplited[5]
                                    };

                                    //var cdrAction = JSON.parse(cdrActionSplited)
                                    object[splittedByEqual[0]] = cdrAction;
                                }
                            })
                            self.PolicyFacets[L0Key].Values[L1Key] = object

                            //self.PolicyFacets[L0Key].Values[L1Key] = L1Value.DefaultValue
                        };
                    });
                };
            });

        };

        // ______________________________________   confirm policy creation   __________________________

        self.CreatePolicy = function () {
                policyData.create_new_policy(self.PolicyInfo)
                    .then(function (success) {
                            $mdDialog.cancel();
                            $state.go('app.policy.definition.fileType', {
                                PolicyID: success.data.Id
                            }, {
                                reload: true

                            });
                        },
                        function (error) {
                            alert("there was an error : " + error.data.Message);
                        })
            }
            // ______________________________________   format to post facets   ________________________

        self.FormatForPOST = function () {
            var Facets2POST = [];
            angular.forEach(self.PolicyFacets, function (L0Value, L0Key) {
                var NewFacet = {
                    "Description": L0Key,
                    "Values": {}
                };
                angular.forEach(L0Value.Values, function (L1Value, L1Key) {
                    if (L0Value.hasOwnProperty("Template")) {
                        var KeyType = L0Value.Template.Properties[L1Key].Type;
                        if (KeyType.includes("FacetPropertyType_MultiChoice") && L1Value !== null && typeof L1Value === "object") {
                            var ObjectString = "";
                            angular.forEach(L1Value, function (MCValue, MCKey) {
                                var PropString = "";
                                angular.forEach(MCValue, function (MC1Value, MC1Key) {
                                    PropString += MC1Value + ":";
                                })
                                PropString = PropString.substring(0, PropString.length - 1);
                                ObjectString += MCKey + "=" + PropString + "|";
                            })
                            ObjectString = ObjectString.substring(0, ObjectString.length - 1);
                            NewFacet.Values[L1Key] = ObjectString;
                        } else {
                            NewFacet.Values[L1Key] = (L1Value != null) ? L1Value.toString() : "";
                        }
                    }
                })
                Facets2POST.push(NewFacet);
                console.log(Facets2POST)
            })
            policyData.post_policy_settings(self.policyId, Facets2POST).then(function (success) {
                self.show_success_dialog("Your changes were successfuly saved")
                self.getPolicyInfo(self.policyId)
            }, function (error) {
                self.show_error_dialog("An error occured while saving your changes : ", error.data.Message)
            })
        }

        //save cdr settings__________________________________________
        self.SaveFacetsInCDR = function (DOMValue) {
                if (!DOMValue) {
                    self.FormatForPOST();
                } else {
                    console.log("childrens are visible");
                    console.log(DOMValue);
                }
            }
            // ______________________________________   End Of formatting to post    __________________________
    }
])

// ______________________________________   End Of controller    ______________________________________

// ______________________________________   Custom Filters    ______________________________________



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