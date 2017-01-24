app.directive("saveFiletypes", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (!scope.ctrl.isFiletypeEditable) {
                    scope.ctrl.isFiletypeEditable = true
                } else {
                    scope.ctrl.isFiletypeEditable = false;
                    policyData.postFiletype(scope.ctrl.policyId, scope.ctrl.Filetypes).then(function(success){
                        scope.ctrl.show_success_dialog("Your changes were sucessfully saved")
                    }, function(error){
                        scope.ctrl.show_error_dialog("An error occured", error.data.Message)
                    })
                }
            })
        }
    }
})
app.directive("tableIsDisabledModal", function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.bind("click", function(){
                console.log("clicked")
                if (scope.ctrl.isFiletypeEditable = false){
                    scope.ctrl.show_error_dialog("Warning", "Make sure to click on EDIT")
                }
            })
        }
    }
})

app.directive("toggleChildrenStates", function(){
    return{
        restrict: "A",
        scope: {
            children: "@"
        },
        require: "^?ngModel",
        link: function(scope, element, attrs){
            element.bind("click", function(){
                console.log("wow")
                console.log(scope.children)
            })
        }
    }
})