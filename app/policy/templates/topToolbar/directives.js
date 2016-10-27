app.directive("openSidenav", function ($mdSidenav) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.bind("click", function () {
                
                var icon = $("#openSidenav");
                
                if (scope.ctrl.sidenavIsOpened == false) {

                    console.log(scope.sidenavIsOpened)
                    $mdSidenav("policySidenav").open();
                    icon.html("arrow_left");
                    scope.ctrl.sidenavIsOpened = true;

                } else {

                    $mdSidenav("policySidenav").close();
                    icon.html("arrow_right");
                    scope.ctrl.sidenavIsOpened = false;

                }


            })
        }
    }
})
