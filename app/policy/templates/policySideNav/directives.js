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

app.directive("reorderPolicyList", function(){
    return {
        restrict: "A",
        link: function(scope, element, attr){
            element.click(function(){
                var icon = $(this).find("md-icon")
                icon.toggleClass("animated wobble")
                var items = $(".policyItem");
                items.attr("ng-drag", "true");
                items.toggleClass("animated bounce");
            })
        }
    }
})