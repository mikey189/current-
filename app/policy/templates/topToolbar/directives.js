app.directive("openSidenav", function ($mdSidenav) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
           
            element.bind("click", function () {
                $mdSidenav("policySidenav").toggle();
                

            })
        }
    }
})
