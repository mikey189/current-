app.directive("open_details", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                scope.open_details($event)
            })
        }
    }
})

app.directive("get_details", function (sanitization_factory) {
    return {
        restrict: "A",
        priority: 1000,
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                scope.sanitization_id = self.attr("sanitizationId")   
                scope.get_details(scope.sanitization_id)
                scope.$apply()
            })
        }
    }
})


app.directive("closeSanitizationDetails", function ($mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                $mdDialog.cancel()
            })
        }
    }
})
