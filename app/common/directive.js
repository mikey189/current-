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

app.directive("logout", function ($rootScope, $state, $timeout) {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      var sname = localStorage.getItem("serverName");
      element.click(function () {
       
        //location.reload(true)
        localStorage.clear()
        $timeout(function () {
          $state.go("login")

        })
      })
    }
  }
})
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