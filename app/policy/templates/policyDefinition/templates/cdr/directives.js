app.directive("toggleCdrEdition", function(){
    return{
        restrict: "A",
        scope: {
            bindedValue: "="
        },
        link: function(scope, element, attrs){
            element.bind("click", function(){
                var self = $(this)
                var icon = self.find("md-icon")
                if (!scope.bindedValue){
                    scope.bindedValue = true
                    icon.html("save")
                }else{
                    scope.bindedValue = false
                    icon.html("edit") 
                }
            })
        }
    }
})

