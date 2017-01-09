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

app.directive("checkCredentials", ["authService", "$rootScope", "$http", "$state", "$cacheFactory", function (authService, $rootScope, $http, $state, $cacheFactory) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                window.localStorage.clear()
                var serverName = document.getElementById("ServerName").value
                console.log(serverName)
                authService.checkLogin(scope.ctrl.serverName, scope.ctrl.UserName, scope.ctrl.Password).then(function (answer) {
                    var token = "Bearer " + answer.data.AccessToken
                    localStorage.setItem("serverName", serverName)
                    localStorage.setItem("token", token);
                    localStorage.getItem(token)
                    localStorage.getItem(serverName)
                    var LocalToken = localStorage.getItem("token");
                    $http.defaults.headers.common.Authorization = LocalToken
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