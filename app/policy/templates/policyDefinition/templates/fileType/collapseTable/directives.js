//begin directive for extension table//

//edit filetype


app.directive("editFiletype", ["policyData", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var advanceModeButton = $("#show-advanced-filetype-button")
            var table = $("#filetype-table")
            element.click(function () {
                var self = $(this)
                if (!scope.ctrl.isTableEditable) {
                    advanceModeButton.removeClass("hidden")
                    table.removeClass("notEditable")
                    self.css("background-color", "red")
                    self.html("DONE")
                    scope.ctrl.isTableEditable = true;
                } else {
                    advanceModeButton.addClass("hidden")
                    table.addClass("notEditable")
                    self.css("background-color", "#311B92")
                    policyData.postFiletype(scope.ctrl.policyId, scope.ctrl.types).then(function (answer) {
                        scope.ctrl.types = answer.data
                    })
                    self.html("EDIT")
                    scope.ctrl.isTableEditable = false;
                }
            })
        }
    }
}])


//TO DO animation to notify user to click on edit before being able to edit the table




app.directive("showExtensions", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                var extension = self.attr("index");
                var icon = self.find("md-icon");
                console.log(scope.ctrl.filetype)

                if (!scope.ctrl.areExtensionsVisible[extension]) {
                    scope.ctrl.areExtensionsVisible[extension] = true;
                    icon.html("keyboard_arrow_down")

                } else {
                    scope.ctrl.areExtensionsVisible[extension] = false;
                    icon.html("keyboard_arrow_right");
                }
                scope.$apply()
                console.log(scope.ctrl.areExtensionsVisible[extension])
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