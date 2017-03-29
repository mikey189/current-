app.directive("openSystemEventsFilters", function ($mdDialog, notification_types) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                notification_types.get_notifications_types().then(function (answer) {
                    scope.notification_types = answer.data
                    $mdDialog.show({
                        scope: scope, // use parent scope in template
                        preserveScope: true,
                        clickOutsideToClose: true,
                        templateUrl: "app/reports/system_events/filter/filter_modal.html",
                        parent: angular.element(document).find("body")
                    })
                })
            })
        }
    }
})

app.directive("closeSystemEventsFilter", function ($mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                $mdDialog.cancel()
            })
        }
    }
})