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
                    var L0object = {}
                    var L1object = {}
                    var objectToSend = {}
                    angular.forEach(scope.ctrl.whoData, function (L0Value, L0Key) {
                        L0object.key = L0Key
                        L0object.value = L0Value

                        angular.forEach(L0object.value.Properties, function (L1Value, L1Key) {
                            if (L1Key == "StrPropType_ChannelPolicyToUse") {
                                L1object[L1Key] = L1Value.DefaultValue.Key
                            } else {
                                var str = ""
                                for (var i in L1Value.DefaultValue) {
                                    var i = L1Value.DefaultValue[i] + "|"
                                    str += i
                                }
                                L1object[L1Key] = str
                                objectToSend.Description = "Channel Usage Settings"
                                 objectToSend.Value =  L1object
                            }
                        })

                    })
                    console.log(objectToSend)
                    channelData.updateWhoIsUsing(scope.ctrl.rootId, objectToSend).then(function (success) {
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

//format

//{"StrPrototypeChannelPolicyToUse": 16, "Channel groups": "A | B | c", the same for the rest, "IP": "1234.234 | 23.34"}