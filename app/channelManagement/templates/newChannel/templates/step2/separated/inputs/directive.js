app.directive("addIsmb", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var iSMB = {};
                scope.ctrl.iSMBList.push(iSMB);
            })

        }
    }
})
app.directive("deleteIsmb", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var iSMB = $(this).parents(".iSMB");
                iSMB.removeClass("fadeInUp");
                iSMB.addClass("fadeOutLeft");
                scope.ctrl.iSMBCount--;
                $timeout(function () {
                    iSMB.addClass("hidden")

                }, 800)
            })
        }
    }
})
app.directive("addOsmb", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var oSMB = {};
                scope.ctrl.oSMBList.push(oSMB);
            })
        }
    }
})
app.directive("deleteOsmb", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var iSMB = $(this).parents(".oSMB");
                iSMB.removeClass("fadeInUp");
                iSMB.addClass("fadeOutRight");
                scope.ctrl.oSMBCount--;
                $timeout(function () {
                    iSMB.addClass("hidden")

                }, 800)
            })
        }
    }
})

app.directive("ncInputListType", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                var icon = self.find("g");

                if (scope.ctrl.iSelected) {
                    self.addClass("iSelected");
                    icon.addClass("ncIconSelected");
                    scope.ctrl.iSelected = false;

                } else {

                    self.removeClass("iSelected");
                    icon.removeClass("ncIconSelected");
                    scope.ctrl.iSelected = true;
                }
            })
        }
    }
})
app.directive("ncOutputListType", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.bind("click", function () {

                var self = $(this);
                var icon = self.find("g");
                if (scope.ctrl.oSelected) {
                    self.addClass("oSelected");
                    icon.addClass("ncIconSelected");
                    scope.ctrl.oSelected = false;

                } else {

                    self.removeClass("oSelected");
                    icon.removeClass("ncIconSelected");
                    scope.ctrl.oSelected = true;
                }
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

app.directive("ncPassDataToSettings", ["C2CData", function (C2CData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var inputSettings = [];
                var outputSettings = [];

                $(".iSelected").each(function () {
                    var that = $(this);
                    var selectedInput = {};
                    selectedInput.input = that.find("md-content").html().toLowerCase();
                    selectedInput.isActive = true;
                    inputSettings.push(selectedInput)
                });
                $(".oSelected").each(function () {
                    var that = $(this);
                    var selectedOutput = {};
                    selectedOutput.output = that.find("md-content").html().toLowerCase();
                    selectedOutput.isActive = true;
                    outputSettings.push(selectedOutput)
                })

                scope.ctrl.selectedOutputs = outputSettings;
                scope.ctrl.selectedInputs = inputSettings;

                var data2pass = {
                    generalInformations: scope.ctrl.channel,
                    selectedInputs: scope.ctrl.selectedInputs,
                    selectedOutputs: scope.ctrl.selectedOutputs,
                    iSMB: scope.ctrl.iSMBList,
                    oSMB: scope.ctrl.oSMBList
                }
                console.log(data2pass);
                C2CData.set(data2pass);
            })
        }
    }
}])


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
