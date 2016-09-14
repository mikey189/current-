app.directive("dInputsByChannel", function () {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/inputsByChannel/inputsByChannel.html",
        replace: false
    }
})

app.directive("dResecTable", function () {
    return {
        restrict: "E",
        templateUrl: "app/dashboard/templates/resecTable/resecTable.html",
        replace: false
    }
})



app.directive('resecTable', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/resecTable/resecTable.html',
        replace: false
    }
})


app.directive('outputByChannel', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/outputByChannel/outputByChannel.html',
        replace: false
    }
})


app.directive('toolbarTop', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/toolbarTop/toolbarTop.html',
        replace: false
    }
})

app.directive("scroller", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("scroll", function () {
                console.log("coucou")
                console.log("scrolling")
            })
        }
    }
})
