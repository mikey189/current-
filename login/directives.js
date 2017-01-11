
app.directive("checkCredentials", ["authService", "$rootScope", "$http", "$state",
 function (authService, $rootScope, $http, $state) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var serverName = document.getElementById("ServerName").value
                var username = $("#username")
                var password = $("#password")           
                authService.checkLogin(scope.ctrl.serverName, scope.ctrl.UserName, scope.ctrl.Password).then(function (answer) {
                    var token = "Bearer " + answer.data.AccessToken
                    localStorage.setItem("serverName", serverName)
                    localStorage.setItem("token", token);
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