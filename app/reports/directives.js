app.directive("showValues", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {

            element.click(function () {
                var self = $(this);
                var icon = self.find("md-icon")
                var keys = self.next(".keys")

                if (!scope.ctrl.keys) {
                    scope.ctrl.keys = true;
                    keys.removeClass("hidden");
                    icon.html("keyboard_arrow_down")
                } else {
                    scope.ctrl.keys = false;
                    keys.addClass("hidden");
                    icon.html("keyboard_arrow_right")
                }
            })
        }
    }
})
app.directive("showExtensions", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {

            element.click(function () {
                var self = $(this);
                var icon = self.find("md-icon")
                var extensions = self.next(".extensions")

                if (!scope.ctrl.showExtensions) {
                    scope.ctrl.showExtensions = true;
                    extensions.removeClass("hidden");
                    icon.html("keyboard_arrow_down")
                } else {
                    scope.ctrl.showExtensions = false;
                    extensions.addClass("hidden");
                    icon.html("keyboard_arrow_right")
                }
            })
        }
    }
})
