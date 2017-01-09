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

app.directive("logout", function ($rootScope, $state) {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      var sname = localStorage.getItem("serverName");
      element.click(function () {
        localStorage.clear("token")
        localStorage.clear("serverName")
          //does not seem to be working, test later on especially for scope in throws injectiion error if throwing "$scope"
          //$rootScope = $rootScope.$new(true);
          //scope = scope.$new(true);
        $state.go("login")
          //this empties the cache so that when logging out and reloging in we do not use cached data
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