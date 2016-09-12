app.directive("ncInputListType", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            $(document).find(".ncitWrapper").css("width", scope.ctrl.width)
            element.bind("click", function () {
                $(this).each(function () {
                    var siblings = $(this).siblings(".ncitWrapper")
                    siblings.find(".ncitName").css("color", "black")
                    siblings.css("background-color", "white")
                    siblings.find("g").css("fill", "#6B69EA")
                    $(this).css("border-radius", "10px")
                    $(this).css("background-color", "#6B69EA");
                    $(this).find(".ncitName").css("color", "white")
                    $(this).find("g").css("fill", "white");
                    scope.ctrl.selectedInput = $(this).find(".ncitName").html().toLowerCase();
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
