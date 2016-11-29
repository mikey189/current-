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
                scope.ctrl.defaultUrl = "http://" + scope.ctrl.server + ":4580"
                $rootScope.url = scope.ctrl.defaultUrl;
                authService.checkLogin(scope.ctrl.username,
                        scope.ctrl.password)
                    //first function handles success
                    .then(function (answer) {
                            console.log("token : " + answer.AccessToken)
                            $rootScope.token = answer.AccessToken;
                            $http.defaults.headers.common['Authorization'] = $rootScope.token;
                            $state.go("app.dashboard")
                        },
                        //second function handles error
                        function (error) {
                            username.addClass("error animated shake")
                            password.addClass("error animated shake")
                            scope.ctrl.is_login_nahon = false
                        })

            })

        }
    }
}]);