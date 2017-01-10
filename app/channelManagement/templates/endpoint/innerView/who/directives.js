//new directives after I moved who is using this .. inside channels

//channel groups: splaitting avaialable channels and current channels


app.directive("editWhoScreen", function (channelData, $mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var edit_button = $("#edit-who-screen")
            element.bind("click", function () {
                if (!scope.ctrl.is_who_screen_editable) {
                    scope.ctrl.is_who_screen_editable = true
                    edit_button.html("SAVE")
                    edit_button.addClass("inEdition")
                } else {
                    scope.ctrl.is_who_screen_editable = false
                    edit_button.html("EDIT")
                    edit_button.removeClass("inEdition")
                    var facets = []
                    var L1object = {}
                    angular.forEach(scope.ctrl.ChannelFacets, function (L1Value, L1Key) {

                        angular.forEach(L1Value.Values, function (L2Value, L2Key) {

                            if (L2Key === "StrPropType_ChannelPolicyToUse") {

                                L1object[L2Key] = L2Value

                            } else {

                                var str = ""

                                angular.forEach(L2Value, function (L3Value, L3Key) {

                                    str += L3Value + "|"

                                })

                                L1object[L2Key] = str
                                //removes last ("|") inserted at the end of str
                                L1object[L2Key] = L1object[L2Key].substring(0, L1object[L2Key].length - 1);
                            }

                        })
                        facets.push({
                            "Description": L1Key,
                            "Values": L1object
                        })
                        console.log(facets)
                    })
                    channelData.updateWhoIsUsing(scope.ctrl.rootId, facets).then(function (success) {
                        console.log(success)
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Your changes were successfully saved.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                        );
                    }, function (error) {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Error')
                            .textContent('An error occured while updating the changes you made : ' + error.data.Message)
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                        );
                    })
                }
            })
        }
    }

})


app.directive("addIp", function () {
    return {
        restrict: "A",
        scope: {
            value: "=",
            container: "="
        },
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (!scope.container.includes(scope.value)) {
                    scope.$apply(function () {
                        scope.container.push(scope.value)
                    })
                } else {
                    alert(scope.value + " already exists !")
                }

            })
        }
    }
})