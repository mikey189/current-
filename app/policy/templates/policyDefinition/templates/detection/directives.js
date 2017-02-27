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

app.directive("checkIfEditable", function () {
    return {
        restrict: "A",
        priority: 1000,
        link: function (scope, element, attrs) {
            var tables = $("#detectionWrapper");
            var editButton = $(".editDetection");
            element.click(function () {
                if (tables.hasClass("notEditable")) {
                    editButton.toggleClass("animated shake")
                }
            })
        }
    }
})

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


app.directive("unwrappCukoo", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                if (!scope.ctrl.cukoo) {
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

.directive('stringToNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function (value) {
                return '' + value;
            });
            ngModel.$formatters.push(function (value) {
                return parseFloat(value);
            });
        }
    };
});