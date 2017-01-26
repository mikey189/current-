app.directive("editDwSources", function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.bind("click", function(){
                if (!scope.ctrl.AreSettingsEditable){
                    scope.ctrl.AreSettingsEditable = true;
                }else{
                    scope.ctrl.AreSettingsEditable = false;
                }
            })
        }
    }
})