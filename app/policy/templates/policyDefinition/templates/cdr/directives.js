app.directive("toggleCdrEdition", function (policyData, $mdDialog) {
    return {
        restrict: "A",
        scope: {
            bindedValue: "=",
            value: "=value",
            policyId: "=policyId",
            key: "=",
            global: "=global"
        },
        link: function (scope, element, attrs) {

            element.bind("click", function () {
                var self = $(this)
                var icon = self.find("md-icon")
                if (!scope.bindedValue) {
                    scope.$apply(function () {
                        scope.bindedValue = true
                    })
                    icon.html("save")

                } else {

                    scope.$apply(function () {
                        scope.bindedValue = false
                    })
                    var postData = {}
                    angular.forEach(scope.value, function (v, k) {
                        postData[k] = v;
                    });


                    //iterate over scope.global and convert object to string
                    //iterate over scope.global and convert object to string
                    var values = {};
                    var objInProperties = scope.global;
                    for (var prop in objInProperties) {
                        // skip loop if the property is from prototype
                        if (!objInProperties.hasOwnProperty(prop)) continue;
                        values[prop] = "";
                        var isFirst = true;
                        // iterate over property object
                        var obj2 = objInProperties[prop];
                        for (var prop2 in obj2) {

                            if (!obj2.hasOwnProperty(prop2)) continue;
                            var cdrAction = obj2[prop2];
                            //create string from object values separated by ':'
                            var tmpCdrActionStr = "";
                            /* for (var cdrProperty in cdrAction) {
                                 if (!cdrAction.hasOwnProperty(cdrProperty)) continue;
                                 tmpCdrActionStr += (!isFirst ? ":" : "") + cdrAction[cdrProperty];
                                 isFirst = false;
                             }*/
                            ////reset isFirst
                            // isFirst = true;
                            //var cdrActionJsonStr = JSON.stringify(cdrAction);
                            var cdrActionStr = prop2 + "=" + cdrAction["Product"] + ":" + cdrAction["Category"] + ":" + cdrAction["ActionName"] + ":" + cdrAction["RiskLevel"] + ":" + cdrAction["Description"] + ":" + cdrAction["IsSelected"];
                            values[prop] += (isFirst ? "" : "|") + cdrActionStr;

                            isFirst = false;
                        }

                    }
                    var firstObject = {}
                    firstObject[scope.key] = postData
                    var object = {
                        "Description": "Policy CDR Settings",
                        "Values": values // scope.global
                    }
                    var object2send = []
                    object2send.push(object)


                    policyData.post_policy_settings(scope.policyId, object2send).then(function (success) {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent("CDR Settings have successfully been saved")
                            .ariaLabel('Alert Dialog Demo')
                            .ok('OK')
                        );
                        policyData.get_policy_info(scope.policyId)
                    }, function (error) {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Error')
                            .textContent()
                            .ariaLabel('Could not save CDR Settings, Error : ' + error.data.Message)
                            .ok('Error')
                        );
                    })

                    icon.html("edit")



                }
            })
        }
    }
})