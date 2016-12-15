//toggling edition for users 
app.directive("editPolicyUsers", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                if (!scope.ctrl.are_users_editable) {
                    self.children("md-icon").html("done")
                    scope.ctrl.are_users_editable = true
                } else {
                    self.children("md-icon").html("edit")      
                    policyData.update_users(scope.ctrl.policyId, scope.ctrl.users)
                    scope.ctrl.are_users_editable = false
                }
            })
        }
    }
})




app.directive("deleteUserFromPolicy", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                var user = self.parent(".user-user-list")
                var user_name = user.attr("user-name")
                var index = scope.ctrl.users.indexOf(user_name)
                scope.ctrl.users.splice(index, 1)
                user.addClass("animated slideOutRight")
                $timeout(function () {
                    user.addClass("hidden")
                }, 800)
            })

        }
    }
})


//toggling edition mode for groups 

app.directive("editPolicyGroup", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                if (!scope.ctrl.are_groups_editable) {
                    self.children("md-icon").html("done")
                    scope.ctrl.are_groups_editable = true
                } else {
                    self.children("md-icon").html("edit")
                    console.log(scope.ctrl.policyId)
                    policyData.update_groups(scope.ctrl.policyId, scope.ctrl.groups)
                    scope.ctrl.are_groups_editable = false
                }
                scope.$apply()
            })
        }
    }
})

//deleting user from policy

app.directive("deleteGroupFromPolicy", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                var group = self.parent(".user-user-list")
                var group_name = group.attr("group-name")
                var index = scope.ctrl.groups.indexOf(group_name)
                scope.ctrl.groups.splice(index, 1)
                group.addClass("animated slideOutLeft");
                $timeout(function () {
                    group.addClass("hidden")
                }, 800)
            })

        }
    }
})

//all directives for eidting channels//

app.directive("editChannels", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var icon = self.find("md-icon");
                var current_channels = $("#currentChannels")
                if (!scope.ctrl.areChannelsEditable) {
                    scope.ctrl.areChannelsEditable = true;
                    current_channels.removeClass("notEditable")
                    icon.html("done");
                } else {
                    for (i = 0; i < scope.ctrl.current_channels.length; i++) {
                        var channelId = scope.ctrl.current_channels[i].Key
                        scope.ctrl.channelIds.push(channelId)
                    }
                    scope.ctrl.areChannelsEditable = false;
                    console.log("post to id: " + scope.ctrl.policyId)
                    policyData.update_current_channels(scope.ctrl.policyId, scope.ctrl.channelIds)
                    current_channels.addClass("notEditable")
                    icon.html("edit");

                }
            })
        }
    }
})
app.directive("editAllComputers", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var icon = $(this).find("md-icon")
                if (scope.ctrl.are_all_computers_editable) {
                    scope.ctrl.are_all_computers_editable = false
                    icon.html("edit")
                } else {
                    scope.ctrl.are_all_computers_editable = true
                    icon.html("done")
                }
            })
        }
    }
})
app.directive("editPolicyComputers", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var icon = $(this).find("md-icon")
                if (scope.ctrl.are_current_computers_editable) {
                    scope.ctrl.are_current_computers_editable = false
                    icon.html("edit")
                } else {
                    scope.ctrl.are_current_computers_editable = true
                    icon.html("done")
                }

            })
        }

    }
})

app.directive("removeComputerFromPolicy", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var computer_name = self.siblings(".computer_name").html()
                var computer_name_div = self.siblings("md-virtual-repeat")
                var computer_index = scope.ctrl.policy_computers.indexOf(computer_name)
                computer_name_div.addClass("animated fadeOutRight")
                scope.ctrl.policy_computers.splice(computer_index, 1)
            })
        }
    }
})

app.directive("addComputerToPolicy", function ($mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var computer_name = self.siblings(".computer_name").html()
                var computer_name_div = self.siblings("md-virtual-repeat")
                computer_name_div.addClass("animated fadeOutRight")
                //The includes() method determines whether one string may be found within another string/array,
                // returning true or false as appropriate.
                if (scope.ctrl.policy_computers.includes(computer_name)) {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#computers')))
                        .clickOutsideToClose(true)
                        .title('You can not add this computer')
                        .textContent('This Computer is already in use inside this policy')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                    );
                } else {
                    scope.ctrl.policy_computers.push(computer_name)
                }

            })
        }
    }
})

app.directive("alertValue", function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.bind("click",function(){
                scope.ctrl.test_value--
                console.log(scope.ctrl.test_value)
            })
        }
    }
})