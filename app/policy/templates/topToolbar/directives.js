app.directive("openSidenav", function($mdSidenav){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            var windowHeight = $(window).height()
            element.bind("click", function(){
                $mdSidenav("policySidenav").toggle();
                console.log(windowHeight)
                $mdSidenav.height(windowHeight)
            })
        }
    }
})