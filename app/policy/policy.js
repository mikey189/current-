app.controller('policy', ["$scope", "$mdSidenav", "policyData", "channelData", "$state", "$http", "$mdDialog", "$timeout",
    function ($scope, $mdSidenav, policyData, channelData, $state, $http, $mdDialog, $timeout) {
        var self = this;
        self.sidenav_edit_mode = false;
        self.PolicyInfo = {};
        self.newPolicy = false;
        self.isEditable = false;
        self.is_policy_sidenav_editable = false;
        self.channelIds = [];
        self.types = {};
        //self.PolicyFacets = self.PolicyFacets || {};

        self.allFacets = {};
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

        self.AllowAllExtensions = function (Parent) {
            for (i in self.Filetypes[Parent]) {
                if (self.Filetypes[Parent][i].AllowOption = true) {
                    self.Filetypes[Parent][i].AllowOption = true
                } else {
                    self.Filetypes[Parent][i].AllowOption = false
                }
            }
        }

        self.RefreshSidenav = function () {
            policyData.getSidenav().then(function (answer) {
                self.sideNavList = answer.data
                self.policyId = self.sideNavList[0].PolicyId
            })
        }
        self.RefreshSidenav()
            /*__________________________  formatting facets for post __________________________ */
            //settings not editable by default
        self.areSettingsEditable = false;
        //this function is called through directive to allow further DOM manipulations
        self.post_policy_settings = function (values) {
            //formatting dict to list
            var postData = []
            angular.forEach(values, function (v, k) {

                postData.push({
                    "Description": k,
                    "Values": v['Values']
                })
            });

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


        self.mkstr = function (value) {
            var values = {};
            var obj = value;
            for (var prop in obj) {
                // skip loop if the property is from prototype
                if (!obj.hasOwnProperty(prop)) continue;
                values[prop] = "";
                var isFirst = true;
                // iterate over property object
                var obj2 = obj[prop];
                for (var prop2 in obj2) {
                    if (!obj2.hasOwnProperty(prop2)) continue;
                    var cdrAction = obj2[prop2];
                    var cdrActionStr = cdrAction;
                    values[prop] += (!isFirst ? "|" : "") + cdrActionStr;
                    //console.log(prop2 + " = " + JSON.stringify(obj2[prop2]));
                    isFirst = false;
                }

            }
            return values
        }

        //________________________CDR FACETS and checking if defaultvalues are not null ___________________________

        self.getPolicyInfo = function (id) {

                policyData.get_policy_info(id).then(function (answer) {
                    console.log(answer)
                        //self.detection = answer.data.PolicyInfo.FileDetectionConfigurations
                    self.Filetypes = answer.data.PolicyInfo.FileTypesActionsSettings
                    self.policy = answer.data
                    var PolicyFacetsIfNull = {
                        "Policy CDR Settings": {
                            "Values": {}
                        }
                    }
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
                        self.cdr = answer.data
                        angular.forEach(self.cdr['Policy CDR Settings'].Properties, function (value, key) {

                            if (self.PolicyFacets['Policy CDR Settings'].Values[key] == undefined || self.PolicyFacets['Policy CDR Settings'].Values[key] === "") {
                                self.PolicyFacets['Policy CDR Settings'].Values[key] = value.DefaultValue[0]

                            } else {


                                if (self.PolicyFacets['Policy CDR Settings'].Values[key].length > 0) {
                                    var splittedByPipe = self.PolicyFacets['Policy CDR Settings'].Values[key].split("|")
                                    var object = {}

                                    angular.forEach(splittedByPipe, function (L2Val, L2Key) {
                                        var splittedByEqual = L2Val.split("=");
                                        var cdrActionSplited = splittedByEqual[1].split(':');
                                        var cdrAction = {
                                                "Product": cdrActionSplited[0],
                                                "Category": cdrActionSplited[1],
                                                "ActionName": cdrActionSplited[2],
                                                "RiskLevel": cdrActionSplited[3],
                                                "Description": cdrActionSplited[4]
                                            }
                                            //var cdrAction = JSON.parse(cdrActionSplited)
                                        object[splittedByEqual[0]] = cdrAction;
                                    })
                                    self.PolicyFacets['Policy CDR Settings'].Values[key] = object
                                }
                            }
                        })

                    })

                })
            }
            //watching for change//
        $scope.$watch(angular.bind(this, function () {
            return this.policyId;
        }), function (newVal) {
            self.getPolicyInfo(newVal);
        });

        //______________________________________Formatting Facets__________________________________________//

        self.InitFacets = function (RetrievedData) {


            angular.forEach(RetrievedData, function (L0Value, L0Key) {

                if (self.PolicyFacets[L0Key] !== undefined && self.PolicyFacets[L0Key].length !== 0) {
                    //do nothing for now
                    return self.PolicyFacets[L0Key]
                } else {
                    self.PolicyFacets[L0Key] = {
                        "Values": {}
                    }
                    angular.forEach(L0Value.Properties, function (L1Value, L1Key) {
                        if (L1Value.IsHidden == false) {
                            self.PolicyFacets[L0Key].Values[L1Key] = L1Value.DefaultValue
                        }
                    })
                }
            })

        }

    }
])


/* ______________________________________   End Of controller    ______________________________________*/

/* ______________________________________   Custom Filters    ______________________________________*/



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