app.controller("login", ["$rootScope", "authService", "$state", "$timeout", function ($rootScope, authService, $state, $timeout) {
    var self = this;
    self.is_login_nahon = true

    var token = localStorage.getItem("token")
    var ServerName = localStorage.getItem("serverName")

    self.LogUserInOnEnter = function ($event) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            var serverName = document.getElementById("ServerName").value
            var username = $("#username")
            var password = $("#password")
            authService.checkLogin(serverName, self.UserName, self.Password).then(function (answer) {
                var token = "Bearer " + answer.data.AccessToken
                localStorage.setItem("serverName", serverName)
                localStorage.setItem("token", token);
                console.log(token)
                $timeout(function () {
                    $state.go("app.dashboard")

                })
            }, function (error) {
                username.addClass("error animated shake")
                password.addClass("error animated shake")
                self.is_login_nahon = false
            })
        }

    }


}])