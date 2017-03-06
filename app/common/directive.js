app.directive("gTopNavbar", function () {

  return {
    restrict: "E",
    templateUrl: "app/common/templates/topBar.html",
    replace: false
  }

})

app.directive("gSidenav", function () {

  return {
    restrict: "E",
    templateUrl: "app/common/templates/sidenav.html",
    replace: false
  }

})

app.directive("logout", ($rootScope, $state, HTTPHeaders, $window) => {
  return {
    restrict: "A",
    link: (scope, element, attrs) => {
      element.click(() => {
        HTTPHeaders.DeleteTokenFromHeader();
        localStorage.clear();
        //$cookies.remove("serverName");
        $state.go('login', {}, {
          reload: true
        }).then(function () {
          $window.location.reload(true);
        });
      })
    }
  }
});

app.directive("refresh", function ($state) {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      element.click(function () {
        $state.go($state.current, {}, {
          reload: true
        });
      })
    }
  }
})
app.directive("changePassword", ($state) => {
  return {
    restrict: "A",
    link: (scope, element, attrs) => {
      element.click(() => {
       $state.go("ResetPasswordS1");
      })
    }
  }
});