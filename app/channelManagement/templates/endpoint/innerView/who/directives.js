//new directives after I moved who is using this .. inside channels

//channel groups: splaitting avaialable channels and current channels


app.directive("editWhoScreen", function (channelData) {
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
                    var postData = {}

                    angular.forEach(scope.ctrl.whoData['Channel Usage Settings'].Properties, function (v, k) {

                        postData[k] = v.DefaultValue;

                    }, postData);

                    
                    var object = {
                        "Description": "Channel Usage Settings",
                        "Values": postData
                    }
                    console.log(object)
                    channelData.updateWhoIsUsing(scope.ctrl.rootId, [object])
                }
            })
        }
    }

})

//format

//{"StrPrototypeChannelPolicyToUse": 16, "Channel groups": "A | B | c", the same for the rest, "IP": "1234.234 | 23.34"}