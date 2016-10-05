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

app.directive("unwrappFireye", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                if (!scope.ctrl.fireEye) {
                    $(".fireEye").removeClass("hidden")
                    self.find("md-icon").html("keyboard_arrow_down")
                    scope.ctrl.fireEye = true;
                } else {
                    $(".fireEye").addClass("hidden")
                    self.find("md-icon").html("keyboard_arrow_right")
                    scope.ctrl.fireEye = false;
                }
            })
        }
    }
})


app.directive("unwrappCukoo", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this);
                if (!scope.ctrl.cukoo){
                    $(".cukoo").removeClass("hidden")
                    self.find("md-icon").html("keyboard_arrow_down")
                    scope.ctrl.cukoo = true;
                } else {
                    $(".cukoo").addClass("hidden")
                    self.find("md-icon").html("keyboard_arrow_right")
                    scope.ctrl.cukoo = false;
                }
            })
        }
    }
})