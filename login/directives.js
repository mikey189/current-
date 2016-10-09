app.directive("loginButton", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.hover(function () {
                $(this).addClass("md-whiteframe-14dp");
            })
        }
    }
})

app.directive("checkCredentials", ["authService", "$rootScope", "$timeout", function (authService, $rootScope, $timeout) {
    return {
        restrict: "A",
        priority: 1000,
        link: function (scope, element, attrs) {
            element.click(function () {
                console.log("inside service")
                scope.ctrl.defaultUrl = "http://" + scope.ctrl.server + ":4580"
                console.log(scope.ctrl.defaultUrl)
                $rootScope.url = scope.ctrl.defaultUrl;

                $timeout(function () {
                    console.log("here ius the ", $rootScope.url)
                    authService.checkLogin(scope.ctrl.username, scope.ctrl.password).then(function (answer) {
                        console.log("token is ", answer.data)
                    })
                }, 2000)

            })
        }
    }
}])
