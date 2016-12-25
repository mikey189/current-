//new directives after I moved who is using this .. inside channels

//channel groups: splaitting avaialable channels and current channels


app.directive("editWhoScreen", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var edit_button = $("#edit-who-screen")
            element.bind("click", function () {
                if (!scope.ctrl.is_who_screen_editable) {
                    scope.$apply(function () {
                        scope.ctrl.is_who_screen_editable = true

                    })
                    edit_button.html("SAVE")
                    edit_button.addClass("inEdition")
                } else {
                    scope.$apply(function () {
                        scope.ctrl.is_who_screen_editable = false
                    })
                    edit_button.html("EDIT")
                    edit_button.removeClass("inEdition")
                }
            })
        }
    }

})

