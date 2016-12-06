app.directive("editComputerScreen", function (channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var computer_zone = $("#computer_zone")
            element.click(function () {
                var edit_button = $("#edit_computers")
                if (!scope.ctrl.are_ad_computers_editable) {
                    console.log("okay")
                    edit_button.html("SAVE")
                        //setting the color to red
                    edit_button.css("background-color", "#FF1744")
                    computer_zone.removeClass("notEditable")
                    scope.ctrl.are_ad_computers_editable = true

                } else {

                    edit_button.html("EDIT")
                        //make API CALL TO UPDATE CHANNEL
                    channelData.update_computer_list(scope.ctrl.rootId, scope.ctrl.current_computers_in_use)
                    computer_zone.addClass("notEditable")
                        //setting back the color to navy blue
                    edit_button.css("background-color", "#311B92")
                    scope.ctrl.are_ad_computers_editable = false

                }
            })
        }
    }
})



app.directive("ncSelectComputer", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                console.log(scope.ctrl.current_computers_in_use)
                var computer = self.find("md-list-item").html().toLowerCase();
                console.log(computer)
                self.addClass("selectedComputer")
                    //verifying if item already exsits in array before pushing it ;
                if (!scope.ctrl.current_computers_in_use == null) {
                    var index = scope.ctrl.current_computers_in_use.indexOf(computer)
                    if (index === -1) {
                        scope.ctrl.current_computers_in_use.push(computer);
                    }
                }
                //need scope.$apply() for live aspect
                scope.$apply()
            })

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
                var index = scope.ctrl.current_computers_in_use.indexOf(computer)
                scope.ctrl.current_computers_in_use.splice(index, 1);
                parentDiv.addClass("animated fadeOutRight");
                $timeout(function () {
                    parentDiv.addClass("hidden");
                }, 800)
            })
        }
    }
})