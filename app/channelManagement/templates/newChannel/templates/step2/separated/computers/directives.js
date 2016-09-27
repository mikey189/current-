app.directive("ncSelectComputer", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.bind("click", function () {

                var self = $(this);

                var computer = self.find("md-list-item").html().toLowerCase();
                scope.ctrl.addedComputers.push(computer)
                console.log(scope.ctrl.addedComputers)
            })
            

        }
    }
})
