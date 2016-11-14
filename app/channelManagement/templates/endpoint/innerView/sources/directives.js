app.directive("channelInputsSources", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/input-sources/input-sources.html",
        replace: false
    }
})
app.directive("channelOutputsSources", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/output-sources/output-sources.html",
        replace: false
    }
})

app.directive("iSmb", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/iSMB/iSMB.html",
        replace: false
    }
})
app.directive("oSmb", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/oSMB/oSMB.html",
        replace: false
    }
})

app.directive("selectOnClick", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                self.toggleClass("input_is_selected")
            })
        }
    }
})

app.directive("addIsmb", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var ismb = {};
                scope.ctrl.ismb_list.push(ismb)
                scope.$apply()
            })
        }
    }
})
app.directive("addOsmb", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var osmb = {};
                scope.ctrl.osmb_list.push(osmb)
                scope.$apply()
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
app.directive("editInputsAndOutputs", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var edition_section = $("#edition_section")
                var self = $(this)
                if (!scope.ctrl.are_outputs_and_outputs_editable){
                    edition_section.removeClass("notEditable")
                    self.css("background-color", "red")
                    self.html("SAVE")
                    scope.ctrl.are_outputs_and_outputs_editable = true
                }else{
                    edition_section.addClass("notEditable")
                    self.css("background-color", "#311B92")
                    self.html("EDIT")
                    scope.ctrl.are_outputs_and_outputs_editable = false
                }
            })
        }
    }
})