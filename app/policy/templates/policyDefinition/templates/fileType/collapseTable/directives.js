app.directive("toggleOs", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                if (!scope.ctrl.showOs) {
                    $(".osParent").removeClass("hidden")
                    self.find("md-icon").html("keyboard_arrow_down")
                    scope.ctrl.showOs = true
                } else {
                    $(".osParent").addClass("hidden")
                    $(".child").addClass("hidden")
                    $(".pdExceptionRow").addClass("hidden")
                    self.find("md-icon").html("keyboard_arrow_right")
                    scope.ctrl.showOs = false
                }
            })
        }
    }
})


app.directive("showAdvancedMode", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            //DO NOT REMOVE
            $(document).ready(function () {
                //if removed, the directive only affects .hidden element of <th> and not elements from the body
                var button = $("#showAdvanceButton");
                var advanced = $(".advanced");
                var state = true
                element.bind("click", function () {
                    if (state) {
                        advanced.removeClass("hidden");
                        advanced.addClass("animated fadeIn");
                        button.text("RETURN TO BASIC MODE");
                        state = false;
                    } else {
                        state = true;
                        advanced.addClass("hidden")
                        $(".pdExceptionRow").remove();
                        $(".showExceptionRowButton").removeClass("pdGreenButton");
                        $(".showExceptionRowButton").children("md-icon").html("add");
                        scope.ctrl.showException = false;
                        button.text("SHOW ADVANCED MODE")

                    }
                })
            })
        }
    }
})
app.directive("editMode", function ($parse) {
    return {
        restrict: "A",

        link: function (scope, element, attrs) {
            var table = $("table");
            var editButton = $("#editButtonPolicy");
            var edit = true;
            var mdChips = $("md-chips");
            var exceptionRow = $(".pdExceptionRow");
            var name = exceptionRow.closest(".ctEXName").html();

            element.bind("click", function () {
                if (edit) {
                    table.removeClass("notEditable")
                    editButton.html("Save");
                    editButton.addClass("warningEditMode");
                    edit = false;
                } else {
                    edit = true;
                    table.addClass("notEditable");
                    editButton.removeClass("warningEditMode");
                    editButton.text("Edit");
                    console.log(name);
                    scope.ctrl.data2post = scope.ctrl.obj;
                    console.log(scope.ctrl.data2post)
                }

            })
        }
    }
})
app.directive("editField", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var input = $(this).siblings("input");
            var icon = $(this).children("md-icon");
            element.bind("click", function () {
                var disabled = true;
                if (disabled) {
                    icon.html("done");
                    input.removeAttr("disabled")
                    disabled != disabled;
                } else {
                    icon.html("edit");
                    input.attr("disabled")
                    disabled != disabled
                }

            })
        }
    }
})
app.directive("showChildren", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            scope.ctrl.hideChild = true;
            element.bind("click", function () {
                if (scope.ctrl.hideChild) {
                    $(this).siblings("tr").removeClass("hidden");
                    $(this).siblings("tr").addClass("animated fadeIn")
                    $(this).find("md-icon").html("keyboard_arrow_down");
                    scope.ctrl.hideChild = false;
                } else {
                    $(this).siblings("tr").addClass("hidden");
                    $(this).find("md-icon").html("keyboard_arrow_right");
                    scope.ctrl.hideChild = true;
                }
            })

        }
    }
})
app.directive("ctDescription", function () {
    return {
        restrict: "E",
        templateUrl: "app/policy/templates/policyDefinition/templates/fileType/collapseTable/templates/description.html",
        replace: false,
        link: function (scope, element, attrs) {
            $(document).ready(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        }
    }
})




app.directive("notEditableWarning", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var table = $(".notEditable");
            var editButton = $("#editButtonPolicy");
            element.bind("hover", function () {
                if (table.hasClass("notEditable")) {
                    editButton.addClass("animated shake");
                } else {
                    console.log("ok");
                }

            })
        }
    }
})
