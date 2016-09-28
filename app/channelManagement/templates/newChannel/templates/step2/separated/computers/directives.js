app.directive("ncSelectComputer", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            scope.ctrl.addedComputers = [];
            element.bind("click", function () {
                var self = $(this);
                var computer = self.find("md-list-item").html().toLowerCase();
                self.addClass("selectedComputer")
                    //verifying if item already exsits in array before pushing it ;
                if (scope.ctrl.addedComputers.indexOf(computer) === -1) {
                    scope.ctrl.addedComputers.push(computer);
                }
                //need scope.$apply() for live aspect
                scope.$apply()
                console.log(scope.ctrl.addedComputers)
            })

        }
    }
})

app.directive("matchMyHeight", function () {
    return {
        restrict: "A",
        priority: 10,
        link: function (scope, element, attrs) {
            var listHeight = $(".listHeight").height();
            $(".addedComputers").height(listHeight);
        }
    }
})

app.directive("deleteComputerFromList", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.bind("click", function () {
                var parentDiv = $(this).parents(".addedComputers");
                var computer = parentDiv.find("md-list-item").html().toLowerCase();
                var index = scope.ctrl.addedComputers.indexOf(computer)
                console.log("currentList", scope.ctrl.addedComputers)
                scope.ctrl.addedComputers.splice(index, 1);
                console.log(computer)
                parentDiv.addClass("animated fadeOutRight");
                $timeout(function () {
                    parentDiv.addClass("hidden");
                }, 800)
            })
        }
    }
})
