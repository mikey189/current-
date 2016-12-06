//toggling edition for users 
app.directive("editPolicyUsers", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
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
            element.click(function () {
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
            element.click(function () {
                var self = $(this)
  
                if (!scope.ctrl.are_groups_editable) {
                    self.children("md-icon").html("done")
                    scope.ctrl.are_groups_editable = true
                } else {
                    self.children("md-icon").html("edit")
                    policyData.update_groups(scope.ctrl.policyId, scope.ctrl.groups)
                    scope.ctrl.are_groups_editable = false
                }
            })
        }
    }
})

//deleting user from policy

app.directive("deleteGroupFromPolicy", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                var group = self.parent(".user-user-list")
                var group_name = group.attr("group-name")
                var index = scope.ctrl.groups.indexOf(group_name)
                scope.ctrl.groups.splice(index, 1)
                console.log(scope.ctrl.groups.length)
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
            element.click(function () {
                var self = $(this)
                var icon = self.find("md-icon");
                console.log("the current channel scope is :->->->->  "+scope.ctrl.policyId)
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
                    console.log("post to id: "+ scope.ctrl.policyId)
                    policyData.update_current_channels(scope.ctrl.policyId, scope.ctrl.channelIds)
                    current_channels.addClass("notEditable")
                    icon.html("edit");

                }
            })
        }
    }
})