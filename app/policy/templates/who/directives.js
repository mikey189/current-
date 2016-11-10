//toggling edition for users 
app.directive("editPolicyUsers", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this)
                if (!scope.ctrl.are_users_editable){
                    self.children("md-icon").html("done")
                    scope.ctrl.are_users_editable = true
                }else{
                    self.children("md-icon").html("edit")
                    scope.ctrl.are_users_editable = false
                }
            })
        }
    }
})




app.directive("deleteUserFromPolicy", function($timeout){
    return {
        restrict :"A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this);
                var user = self.parent(".user-user-list")
                user.addClass("animated slideOutRight")
                $timeout(function(){
                    user.addClass("hidden")
                }, 800)
            })
            
        }
    }
})


//toggling edition mode for groups 

app.directive("editPolicyGroup", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this)
                if (!scope.ctrl.are_groups_editable){
                    self.children("md-icon").html("done")
                    scope.ctrl.are_groups_editable = true
                }else{
                    self.children("md-icon").html("edit")
                    scope.ctrl.are_groups_editable = false
                }
            })
        }
    }
})

//deleting user from policy

app.directive("deleteGroupFromPolicy", function($timeout){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
               var self = $(this);
            var group  = self.parent(".user-user-list")//not the perfect name
            group.addClass("animated slideOutLeft");
            $timeout(function(){
                group.addClass("hidden")
            }, 800) 
            })
            
        }
    }
})

//all directives for eidting channels//

app.directive("editChannels", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                var icon = self.find("md-icon");
                var current_channels = $("#currentChannels")

                if (!scope.ctrl.areChannelsEditable) {
                    scope.ctrl.areChannelsEditable = true;
                    current_channels.removeClass("notEditable")
                    icon.html("done");
                } else {
                    scope.ctrl.areChannelsEditable = false;
                    current_channels.addClass("notEditable")
                    icon.html("edit");
                }
            })
        }
    }
})


