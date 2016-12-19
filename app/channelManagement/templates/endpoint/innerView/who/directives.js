//new directives after I moved who is using this .. inside channels

//channel groups: splaitting avaialable channels and current channels


app.directive("editWhoScreen", function () {
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
                }
            })
        }
    }

})

app.directive("assignChannelToGroup", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var groupName = self.attr("group-to-add")
                scope.$apply(function () {
                    scope.ctrl.current_channel_groups.push(groupName)
                })
            })
        }
    }
})

app.directive("deleteGroupFromChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var groupName = self.attr("group-to-delete")
                var index = scope.ctrl.current_channel_groups.indexOf(groupName)
                scope.$apply(function () {
                    scope.ctrl.current_channel_groups.splice(index, 1)
                })
            })
        }
    }
})

app.directive("assignUserToChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var userName = self.attr("user-name")
                scope.$apply(function () {
                    scope.ctrl.current_users.push(userName)
                })
            })
        }
    }
})

app.directive("deleteUserFromChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var userName = self.attr("user-name")
                var index = scope.ctrl.current_users.indexOf(userName)
                scope.$apply(function () {
                    scope.ctrl.current_users.splice(index, 1)
                })
            })
        }
    }
})

app.directive("assignComputerToChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var computerName = self.attr("computer-name")
                scope.$apply(function () {
                    scope.ctrl.current_computers.push(computerName)
                })
            })
        }
    }
})

app.directive("removeComputerFromChannel", function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.bind("click", function(){
                var self = $(this)
                var computerName = self.attr("computer-name")
                var index = scope.ctrl.current_computers.indexOf(computerName)
                scope.$apply(function(){
                    scope.ctrl.current_computers.splice(index, 1)
                })
            })
        }
    }
})