    app.directive("showAdvancedMode", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
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
                        button.text("SHOW ADVANCED MODE")
                    }

                })

            }
        }
    })

    app.directive("editMode", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var table = $("table");
                var editButton = $("#editButtonPolicy");
                var edit = true;
                element.bind("click", function () {
                    if (edit) {
                        table.removeClass("notEditable")
                        editButton.html("Done")
                        edit = false;
                    } else {
                        edit = true;
                        table.addClass("notEditable")
                        editButton.text("Edit")
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
                    if (input.attr("disabled")) {
                        icon.html("done");
                        input.removeAttr("disabled")
                    } else {
                        icon.html("edit");
                        input.attr("disabled")
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
