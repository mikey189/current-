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
            templateUrl: "app/cases/templates/description.html",
            replace: false,
            link: function (scope, element, attrs) {
                $(document).ready(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                });
            }
        }
    })
    app.directive("showExceptionRow", function ($compile) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {


                element.bind("click", function () {
                    var parentRow = $(this).closest("tr");
                    var icon = $(this).children("md-icon");
                    var button = $(this);
                    var exceptionRow = $compile("<pd-exception-row></pd-exception-row>")(scope);
                    var userChips = $compile("<pd-user-chips></pd-user-chips>")(scope);
                    
                    if (!scope.ctrl.showException) {

                        icon.html("done");
                        button.addClass("md-raised pdGreenButton");
                        userChips.insertAfter(parentRow);
                        exceptionRow.insertAfter(userChips);
                        scope.ctrl.showException = !scope.ctrl.showException;


                    } else {

                        icon.html("add");
                        button.removeClass("pdGreenButton md-raised");
                        $(".pdExceptionRow").remove();
                        console.log(scope.ctrl.userList);
                        scope.ctrl.showException = !scope.ctrl.showException;
                        

                    }
                })
            }
        }
    })
    
    app.directive("pdUserChips", function(){
        return {
            restrict: "E",
            templateUrl: "app/cases/templates/userChips.html",
            replace: true
        }
    })
    app.directive("pdExceptionRow", function () {
        return {
            restrict: "E",
            templateUrl: "app/cases/templates/exception.html",
            replace: true
        }
    })
    