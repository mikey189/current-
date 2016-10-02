app.directive("matchWidth", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            $(document).ready(function () {
                var row = $(".this");
                row.each(function () {
                    $(this).css("width", "70%")
                })
            })
        }
    }
})

app.directive("editPreferences", ["policyDetection", function (policyDetection) {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            element.click(function () {
                var button = $(this)
                table = $("table")
                if (!scope.ctrl.editMode) {
                    table.removeClass("notEditable")
                    button.html("DONE");
                    scope.ctrl.editMode = true;
                } else {
                    table.addClass("notEditable")
                    button.html("EDIT");
                    policyDetection.post(scope.ctrl.detection)
                }
            })
        }
    }
}])
