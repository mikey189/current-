app.directive("editDwSources", function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.bind("click", function(){
                if (!scope.ctrl.DWSourcesAreEditable){
                    scope.ctrl.DWSourcesAreEditable = true;
                }else{
                    scope.ctrl.DWSourcesAreEditable = false;
                }
            })
        }
    }
})