app.directive("checkCredentials", ["authService", "$rootScope", "$state", "$timeout", "$http", "HTTPHeaders",
    function (authService, $rootScope, $state, $timeout, $mdDialog, $http, HTTPHeaders) {
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

                        localStorage.setItem("token", token) 

                        $state.go("app.dashboard")


                    }, function (error) {

                        scope.ctrl.is_login_nahon = false

                    })
                })

            }
        }
    }
]);