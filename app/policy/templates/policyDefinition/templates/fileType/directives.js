app.directive("saveFiletypes", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                policyData.postFiletype(scope.ctrl.policyId, scope.ctrl.Filetypes).then(function (success) {
                    scope.ctrl.show_success_dialog("Your changes were sucessfully saved")
                    scope.ctrl.getPolicyInfo(scope.ctrl.policyId)
                }, function (error) {
                    scope.ctrl.show_error_dialog("An error occured", error.data.Message)
                })
            })
        }
    }
})
app.directive("tableIsDisabledModal", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                console.log("clicked")
                if (scope.ctrl.isFiletypeEditable = false) {
                    scope.ctrl.show_error_dialog("Warning", "Make sure to click on EDIT")
                }
            })
        }
    }
})


app.directive("filterExtensions", () => {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.on("keyup", (x) => {
                var input, query, table, parentTR, ParentClassification, i;
                input = document.getElementById("search-extensions");
                query = input.value.toLowerCase();
                console.log(query)
            });
        }
    };
});