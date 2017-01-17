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
                        alert("success")
                    }, function(error){
                        alert(error.data.Message)
                    })
                }
            })
        }
    }
})
