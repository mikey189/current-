//begin directive for extension table//

//edit filetype
app.directive("filterExtesions", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("keydown keypress", function () {

                var extensions = $(".L2Section")
                var self = $(this)
                for (i = 0; i <= extensions.length; i++) {
                    if (extensions[i] = self.val()) {
                        extensions[i].removeClass("hidden")

                    }
                }
            })
        }
    }
})

app.directive("editFiletype", ["policyData", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var table = $("#filetype-table")
            var advanceModeButton = $("#show-advanced-filetype-button")
            element.click(function () {
                var self = $(this)
                if (!scope.ctrl.isTableEditable) {
                    table.removeClass("notEditable")
                    self.css("background-color", "red")
                    self.html("DONE")
                    advanceModeButton.removeClass("hidden")
                    scope.ctrl.isTableEditable  = true
                } else {
                    table.addClass("notEditable")
                    self.css("background-color", "#311B92")
                    advanceModeButton.addClass("hidden")
                    policyData.postFiletype(scope.ctrl.policyId, scope.ctrl.types).then(function (answer) {
                        scope.ctrl.types = answer.data
                        console.log("ok posted")
                    })
                    self.html("EDIT")
                    scope.ctrl.isTableEditable = false;
                    scope.ctrl.isAdvancedModeOn = false;
                }
            })
        }
    }
}])

app.directive("showExtensions", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                var extension = self.attr("index");
                var icon = self.find("md-icon");

                if (!scope.ctrl.areExtensionsVisible[extension]) {
                    scope.ctrl.areExtensionsVisible[extension] = true;
                    icon.html("keyboard_arrow_down")

                } else {
                    scope.ctrl.areExtensionsVisible[extension] = false;
                    icon.html("keyboard_arrow_right");
                }
            })
        }
    }
})


//toggle advanced mode for filetype 

app.directive("showAdvancedFiletype", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.click(function () {
                var advancedTabs = $(".advanced")
                var buttonIcon = $("#show-advanced-filetype-button")
                if (!scope.ctrl.isAdvancedModeOn) {
                    advancedTabs.removeClass("hidden")
                    buttonIcon.html("BACK TO BASIC MODE")
                    scope.ctrl.isAdvancedModeOn = true
                } else {
                    advancedTabs.addClass("hidden")
                    buttonIcon.html(("SHOW ADVANCED MODE"))
                    scope.ctrl.isAdvancedModeOn = false
                }
            })

        }
    }
})

app.directive("checkStatus", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                var child = $(".check_me")
                scope.ctrl.isChecked = true
                scope.$apply()
            })
        }
    }
})