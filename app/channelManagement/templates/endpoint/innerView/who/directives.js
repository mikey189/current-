app.directive("editWhoScreen", function (channelData, $mdDialog, $timeout) {
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

                    scope.ctrl.FormatChannelFacetsBeforePOST()

                    $timeout(function () {
                        channelData.updateWhoIsUsing(scope.ctrl.rootId, scope.ctrl.FacetsToPost).then(function (success) {
                            scope.ctrl.HTTP_Dialogs.ShowSuccessDialog()
                        }, function (error) {
                            scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message) //->parameter is the error message to disply inside the Dialog
                        })
                    })

                }
            })
        }
    }

})




/*
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
                                    //do not insert "|" before first and last element
                                    if (L3Key === 0 || L3Key === L2Value.length -1) {
                                        str += L3Value
                                    } else {
                                        str += L3Value + "|"
                                    }

                                })

                                L1object[L2Key] = str
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

*/

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