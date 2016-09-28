app.directive("policyListHover", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.hover(function(){
                var self=  $(this);
                self.toggleClass("policyListHover")
                self.toggleClass("md-whiteframe-12dp")
            })
        }
    }
})