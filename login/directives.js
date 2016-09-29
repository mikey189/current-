app.directive("loginButton", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.hover(function(){
                $(this).addClass("md-whiteframe-14dp");
            })
        }
    }
})