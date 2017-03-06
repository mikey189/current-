app.directive("openJobsFilter", function ($mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                $mdDialog.show({
                    controller: "reports_jobs",
                    scope: scope.$new(),
                    clickOutsideToClose: true,
                    templateUrl: "app/reports/jobs/filter/filter.html",
                    parent: angular.element(document).find("body")
                })
            })
        }
    }
})
app.directive("closeJobsFilter", function ($mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                $mdDialog.cancel()
            })
        }
    }
})



