app.directive("checkCredentials", ["authService", "$rootScope", "$state", "$timeout",
    function (authService, $rootScope, $state, $timeout, $mdDialog) {
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
                        var tokenFromLocalStorage = localStorage.getItem("token")

                        if (tokenFromLocalStorage.length > 10) {
                            $state.go("app.dashboard", {}, {
                                reload: true
                            });
                        } else {
                            $mdDialog.show(
                                $mdDialog.alert()
                                .clickOutsideToClose(true)
                                .title('Error')
                                .textContent('We are sorry but we could not retrieve the token for this session')
                                .ariaLabel('Alert Dialog Demo')
                                .ok('OK')
                            )
                        }
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