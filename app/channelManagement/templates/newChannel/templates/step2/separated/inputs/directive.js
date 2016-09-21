app.directive("ncInputListType", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            $(document).find(".ncitWrapper").css("width", scope.ctrl.iWidth)
            var il = $(document).find("#il");
            var iSMB = $(".iSMB");

            element.bind("click", function () {

                var self = $(this);
                var icon = self.find("g");
                if (scope.ctrl.iSelected) {
                    self.addClass("ncSelected");
                    icon.addClass("ncIconSelected");
                    scope.ctrl.iSelected = false;
                } else {

                    self.removeClass("ncSelected");
                    icon.removeClass("ncIconSelected");
                    scope.ctrl.iSelected = true;
                }

                /*if (scope.ctrl.selectedInput == "relay" && self.hasClass("ncSelected")) {
                    iSMB.removeClass("hidden")
                } else {
                    iSMB.addClass("hidden")
                }
*/

            })
        }
    }
})



app.directive("checkInputs", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.bind("click", function () {
                var selected = $(document).find(".ncSelected");
                    scope.ctrl.inputSettings = [];  
                
                    selected.each(function(){
                    scope.ctrl.selectedInput.name = $(this).find(".ncitName").html().toLowerCase();
                    console.log(scope.ctrl.selectedInput.name)
                    scope.ctrl.selectedInput.isActive = true;
                      
                    scope.ctrl.inputSettings.push(scope.ctrl.selectedInput)

                 })


                console.log(scope.ctrl.inputSettings)

            })
        }
    }
})







app.directive("ncOutputListType", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            $(document).find(".ncotWrapper").css("width", scope.ctrl.oWidth)
            var ol = $(document).find("#ol");
            var oSMB = $(".oSMB");
            element.bind("click", function () {

                $(this).each(function () {
                    $(this).toggleClass("ncSelected")
                    $(this).find("g").toggleClass("ncIconSelected")
                    scope.ctrl.selectedOutput = $(this).find(".ncotName").html().toLowerCase();
                    if (scope.ctrl.selectedOutput == "relay") {
                        oSMB.removeClass("hidden")
                    } else {
                        oSMB.addClass("hidden")
                    }
                })

            })

        }
    }
})



app.directive("editField", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if ($(this).find("md-icon").html() == "edit") {
                    $(this).siblings("input").removeAttr("disabled")
                    $(this).siblings("input").css("background-color", "#f1f1f1")
                    $(this).find("md-icon").html("done")
                } else {
                    $(this).siblings("input").attr("disabled", true)
                    $(this).find("md-icon").html("edit")
                    $(this).siblings("input").css("background-color", "white")

                }
            })
        }
    }
})
app.directive("toggleMediaBurn", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (scope.ctrl.inputAllowMediaBurn = true) {
                    $(document).find("#mediaBurn").removeClass("hidden")
                    $(document).find("#mediaBurn").addClass("animated fadeInRight")
                } else {
                    $(document).find("#mediaBurn").addClass("hidden")
                    $(document).find("#mediaBurn").addClass("animated slideOutRight")
                }

            })

        }
    }
})

app.directive("ncSeparatedInputList", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/newChannel/templates/step2/separated/inputs/templates/inputList.html",
        replace: false
    }
})

app.directive("ncSeparatedOutputList", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/newChannel/templates/step2/separated/inputs/templates/outputList.html",
        replace: false
    }
})

app.directive("iSmb", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/newChannel/templates/step2/separated/inputs/templates/iSMB.html",
        replace: false
    }
})
app.directive("oSmb", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/newChannel/templates/step2/separated/inputs/templates/oSMB.html",
        replace: false
    }
})
