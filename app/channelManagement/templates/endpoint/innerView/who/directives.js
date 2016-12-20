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

app.directive("assignGroupToChannel", function () {
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

app.directive("removeComputerFromChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var computerName = self.attr("computer-name")
                var index = scope.ctrl.current_computers.indexOf(computerName)
                scope.$apply(function () {
                    scope.ctrl.current_computers.splice(index, 1)
                })
            })
        }
    }
})

app.directive("addIpToChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var ip = self.attr("ip-address")
                if (!scope.ctrl.current_ips.includes(ip) && ip !== "") {
                    scope.$apply(function () {
                        scope.ctrl.current_ips.push(ip)
                    })
                } else if (ip === "") {
                    alert("Please enter a valid value (i.e: 127.0.0.0.1)")
                } else {
                    alert("This IP Address is already associated to this channel")
                }
            })
        }
    }
})

app.directive("removeIpFromChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var ip = self.attr("ip-to-remove")
                var index = scope.ctrl.current_ips.indexOf(ip)
                scope.$apply(function () {
                    scope.ctrl.current_ips.splice(index, 1)
                })
            })
        }
    }
})

app.directive("addPolicyToChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var policyName = self.attr("policy-name")
                scope.$apply(function () {
                    scope.ctrl.current_policy = policyName
                })
            })

        }
    }
})
app.directive("removePolicyFromChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                policy = self.attr("policy-name")
                var index = scope.ctrl.multipleCurrentPolicies.indexOf(policy)
                var policyCell = self.closest(".policy-chip-container")

                scope.$apply(function () {
                    scope.ctrl.multipleCurrentPolicies.splice(index, 1)
                    policyCell.addClass("hidden")
                })
            })
        }
    }
})

app.directive("addMultiplePoliciesToChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var policy = self.attr("policy-name")
                if (!scope.ctrl.multipleCurrentPolicies.includes(policy)) {
                    scope.$apply(function () {
                        scope.ctrl.multipleCurrentPolicies.push(policy)

                    })
                } else {
                    alert("This Policy is already being used by this channel")
                }

            })
        }
    }
})