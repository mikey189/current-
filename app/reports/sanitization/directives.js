app.directive("getSantizationId", function (sanitization_factory) {
        return {
            restrict: "A",
            priority: 10,
            link: function (scope, element, attr) {
                element.click(function () {
                    console.log("getting id")
                    scope.sanitization_id = element.attr("sanitizationId")
                    console.log("just clicked "+scope.sanitization_id)
                    scope.$apply()
                })
            }
        }
    })
    //for some reason the more priority is elevated the later it will be executed
app.directive("openSanitizationDetails", function () {
    return {
        restrict: "A",
        priority: 10000,
        link: function (scope, element, attrs) {
            element.click(function () {
               // scope.get_details()
                scope.show_details_modal()

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