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

app.directive("checkCredentials", ["authService", "$rootScope", "$http", "$state", function (authService, $rootScope, $http, $state) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var username = $("#username")
                var password = $("#password")
                localStorage.setItem("serverName", scope.ctrl.serverName)
                var serverName = localStorage.getItem("serverName")
                console.log(serverName)
                authService.checkLogin(scope.ctrl.serverName, scope.ctrl.UserName, scope.ctrl.Password).then(function (answer) {
                    console.log("token : " + answer.AccessToken)
                    localStorage.setItem("token", answer.AccessToken);
                    $http.defaults.headers.common['Authorization'] = localStorage.getItem("token");
                    $state.go("app.dashboard")
                }, function (error) {
                    username.addClass("error animated shake")
                    password.addClass("error animated shake")
                    scope.ctrl.is_login_nahon = false
                })
            })

        }
    }
}]);