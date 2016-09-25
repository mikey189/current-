app.directive("addIsmb", function ($compile) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var toAppend = $compile("<i-smb></i-smb>")(scope)
                $(".iSMBHolder").append(toAppend);
            })
        }
    }
})

app.directive("getIndex", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var iSMB = $(".iSMB");
            scope.ctrl.iIndex;
            iSMB.each(function () {
                var self = $(this);
                var holder = $(".iSMBHolder");
                var iIndex = self.parent().index();
                scope.ctrl.iIndex = iIndex;
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
                $(".oSMBHolder").append($compile("<o-smb></o-smb>")(scope));
                scope.ctrl.oSMBCount++;
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

            var il = $(document).find("#il");

            element.bind("click", function () {

                var self = $(this);
                var icon = self.find("g");
                scope.ctrl.selectedInput = $(this).find("md-content").html().toLowerCase();
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

app.directive("checkInputs", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.bind("click", function () {

                /*create array outside of for each loop to retrieve it later BUTT
                all var related to the 'each' call should be as var otherwise they 
                will be  local and each call will only return the last object*/

                var inputSettings = [];
                var outputSettings = [];
                $('.iSelected').each(function () {

                    var that = $(this);
                    var selectedInput = {};
                    var inputSMBSettings = {};
                    selectedInput.input = that.find("md-content").html();
                    selectedInput.isActive = true;
                    inputSettings.push(selectedInput)
                });
                $('.oSelected').each(function () {
                    var that = $(this);
                    var selectedOuput = {};
                    selectedOuput.output = that.find("md-content").html();
                    selectedOuput.isActive = true;
                    outputSettings.push(selectedOuput)
                });
                scope.ctrl.inputSettings = inputSettings;
                scope.ctrl.outputSettings = outputSettings;

            })
        }
    }
})

app.directive("checkRelay", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {

                alert(scope.ctrl.inputSettings)
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
                    $(this).toggleClass("oSelected")
                    $(this).find("g").toggleClass("ncIconSelected")
                    scope.ctrl.selectedOutput = $(this).find(".ncotName").html().toLowerCase();
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
