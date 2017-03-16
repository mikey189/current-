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
        $state.go("ResetPasswordS2");
      })
    }
  }
});

app.directive("preventoutingWithoutSave", ($state, $rootScope) => {
  return {
    restrict: "A",
    link: (scope, element, attrs) => {
      scope.$watch(function () {
        return $state.$current.locals["@app"].$scope.ctrl;
      }, function (newValue, oldValue) {
        var oldModel = oldValue;
        var newModel = newValue;
        var isEqual = _.isEqual(oldModel, newModel);
       
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (isEqual == true){
              console.log("is equal can't say nothing")
            }else{
              console.log("the model has changed")
              event.preventDefault();
            }
          })
          // Do something with the $scope.buttons;
      });
    }
  }
})