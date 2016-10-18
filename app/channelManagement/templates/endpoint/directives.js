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
})

app.directive("toggleBlockedFiles", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
            })
        }
    }
})

app.directive("testDir", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var self = $(this);
            var blocked = $(".blocked")
            var processed = $(".processed")
            var toRecompile = $(".toRecompile")
            blocked.click(function () {
                if (processed.hasClass("active")) {
                    processed.removeClass("active");
                    blocked.addClass("active")
                    scope.ctrl.isBlocked = true;
                    scope.ctrl.fileState = "fileType.BlockededNumber";
                    scope.ctrl.state = true;
                    toRecompile.css("background-color", "red")
                                        $compile(toRecompile)(scope)

                } else {
                    blocked.addClass("active")
                    scope.ctrl.isBlocked = true;
                    scope.ctrl.fileState = "BlockededNumber";
                    scope.ctrl.state = false;
                    $compile(toRecompile)(scope)

                }
            })
            processed.click(function () {
                if (blocked.hasClass("active")) {
                    blocked.removeClass("active")
                    processed.addClass("active")
                    scope.ctrl.isProcessed = true
                    scope.ctrl.state = false;

                    scope.ctrl.fileState = "ProcessedNumber";
                    $compile(toRecompile)(scope)


                } else {
                    processed.addClass("active")
                    scope.ctrl.isProcessed = true;
                    scope.ctrl.state = true;

                    scope.ctrl.fileState = "ProcessedNumber";
                    $compile(toRecompile)(scope)


                }
            })
        }
    }
})
