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

app.directive("checkCredentials", ["authService", "$rootScope", "$http", function (authService, $rootScope, $http) {
    return {
        restrict: "A",
        priority: 1000,
        link: function (scope, element, attrs) {
            element.click(function () {
                scope.ctrl.defaultUrl = "http://" + scope.ctrl.server + ":4580"
                $rootScope.url = scope.ctrl.defaultUrl;

                authService.checkLogin(scope.ctrl.username,
                    scope.ctrl.password).then(function (answer) {
                    var token = answer.data.AccessToken
                    $http.defaults.headers.common['Authorization'];
                    $http.defaults.headers.common['Authorization'] = token;
                })

            })
        }
    }
}])
