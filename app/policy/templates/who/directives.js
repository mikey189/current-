app.directive("showRelatedUsers", function () {
    
    return {
        
        restrict: "A",
        
        link: function (scope, element, attrs) {
            
            var tmpl = "<h1>Jonathan</h1>"

            element.click(function () {
                
                var self = $(this)
                
                var icon = self.children("md-icon")

                if (scope.ctrl.areUsersVisible) {
                    
                    icon.html("keyboard_arrow_right");
                    
                    tmpl.after(self)
                    
                    self.siblings(".groupUsers").addClass("hidden")

                    scope.ctrl.areUsersVisible = false
                    
                    
                } else {
                    
                    icon.html("keyboard_arrow_down");
                    
                    scope.ctrl.areUsersVisible = true;
                    
                    self.siblings(".groupUsers").removeClass("hidden")

                }
            })
        }

    }
})
