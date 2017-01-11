app.directive("checkCredentials", ["authService", "$rootScope", "$http", "$state", "$timeout",
    function (authService, $rootScope, $http, $state, $timeout) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind("click", function () {
                    var serverName = document.getElementById("ServerName").value
                    var username = $("#username")
                    var password = $("#password")
                    authService.checkLogin(serverName, scope.ctrl.UserName, scope.ctrl.Password).then(function (answer) {
                        var token = "Bearer " + answer.data.AccessToken
                        localStorage.setItem("serverName", serverName)
                        localStorage.setItem("token", token);
                        $timeout(function () {
                            $state.go("app.dashboard")

                        })

                    }, function (error) {
                        username.addClass("error animated shake")
                        password.addClass("error animated shake")
                        scope.ctrl.is_login_nahon = false
                    })
                })

            }
        }
    }
]);