app.directive("policyListHover", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.hover(function () {
                var self = $(this);
                self.toggleClass("policyListHover")
                self.toggleClass("md-whiteframe-12dp")
            })
        }
    }
})

app.directive("reorderPolicyList",["policyList", function (policyList) {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            element.click(function () {
                var icon = $(this).find("md-icon")
                var items = $(".policyItem");
                if (!scope.ctrl.dragMode) {
                    icon.addClass("animated wobble");
                    icon.html("save");
                    icon.css("color", "#EC407A");
                    scope.ctrl.dragMode = true;
                    items.addClass("animated bounce"); 
                }else{
                    icon.removeClass("animated wobble")
                    icon.html("list")
                    icon.css("color", "#23CCC7")
                    scope.ctrl.dragMode = false;
                    items.removeClass("animated bounce");
                    scope.ctrl.priority = [];
                    items.each(function(){
                        scope.ctrl.priority.push($(this).attr("index"))
                    })
                    policyList.postOrder(scope.ctrl.priority);
                }
            })
        }
    }
}])
app.directive("deletePolicy",["policyList", function(policyList){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this);
                var id = parseInt(self.parents("md-list-item").attr("index"));
                
                console.log(id)
                policyList.deletePolicy(id)
            })
        }
    }
}])