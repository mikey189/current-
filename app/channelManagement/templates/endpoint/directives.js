app.directive("matchDataSwitcherHeight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            $(document).ready(function () {
                var self = $("#endpointDashboardCasesFilter")
                var dataSwitcher = $("#CMDataSwitcher")
                var div2Match = $("#endpointDashboardTopUsers")
                var lowerSelf = $("#endpointDashboardCasesFilterLower")
                self.innerHeight(dataSwitcher.innerHeight())
                lowerSelf.height(div2Match.height())
            })
        }
    }
});