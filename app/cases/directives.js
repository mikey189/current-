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
                            button.text("SHOW ADVANCED MODE")
                        }

                    })
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
                        editButton.html("Save")
                        edit = false;
                    } else {
                        edit = true;
                        table.addClass("notEditable")
                        editButton.text("Edit")
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
                        input.addClass("inputEnabled")
                        disabled != disabled;
                    } else {
                        icon.html("edit");
                        input.attr("disabled")
                        input.removeClass("inputEnabled").addClass("inputDisabled")
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
