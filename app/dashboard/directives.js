app.directive("storyTime", () => {

    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/storyTime.html",
        replace: false
    }

})

app.directive("interchangeableGraph", () => {

    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/graphs.html",
        replace: false
    }

})

app.directive("dashboardCalendar", () => {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/timepicker.html",
        replace: false
    }
})

app.directive("legendFrame", () => {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/legendFrame.html",
        replace: false
    }
})

app.directive("bottomGraphs", () => {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/Donughts.html",
        replace: false
    }
})
app.directive("bottomNotifications", ()=> {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/notifications.html",
        replace: false
    }
})
app.directive("newsFeed", () => {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/newsFeed.html",
        replace: false
    }
})
/*app.directive("dInputsByChannel", function () {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/old/inputsByChannel/inputsByChannel.html",
        replace: false
    }
})
app.directive("dResecTable", function () {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/old/resecTable/resecTable.html",
        replace: false
    }
})
app.directive("dCasesSidebar", function () {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/old/sidenavCases/casesSidebar.html",
        replace: false
    }
})
app.directive('resecTable', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/old/resecTable/resecTable.html',
        replace: false
    }
})
app.directive('outputByChannel', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/old/outputByChannel/outputByChannel.html',
        replace: false
    }
})
app.directive('toolbarTop', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/old/toolbarTop/toolbarTop.html',
        replace: false
    }
})
app.directive("getHeight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.ready(function () {
                scope.ctrl.height = $(document).find(".dOutputDataContainer").prop('offsetHeight');
                scope.ctrl.inputTable = $(document).find(".dInputDataContainer");
                scope.ctrl.inputTable.css("height", scope.ctrl.height)
            })

        }
    }
})
app.directive("syncScroll", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            $(document).ready(function () {
                $(document).find("md-virtual-repeat-container").children().bind("scroll", function () {
                    var sibling = $(document).find("md-virtual-repeat-container").children();
                    sibling.scrollTop($(this).scrollTop());
                })
            })
        }
    }
})
app.directive("goToChannel", function ($state, $stateParams) {
    return {
        restrict: "A",
         scope: {
                cid: "@"
            },
        link: function (scope, element, attrs) {
           
            element.click(() => {
                var self = $(this);
                var id = parseInt(scope.cid)
                $state.go('app.channelManagement.endpoint.dashboard', {
                    id: id
                });
            })
        }
    }
})*/