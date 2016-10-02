app.directive("openSidenav", function ($mdSidenav) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.bind("click", function () {
                
                var icon = $("#openSidenav");
                
                if (scope.sidenavIsOpened == false) {

                    console.log(scope.sidenavIsOpened)
                    $mdSidenav("policySidenav").open();
                    icon.html("arrow_left");
                    scope.sidenavIsOpened = true;

                } else {

                    $mdSidenav("policySidenav").close();
                    icon.html("arrow_right");
                    scope.sidenavIsOpened = false;

                }


            })
        }
    }
})
