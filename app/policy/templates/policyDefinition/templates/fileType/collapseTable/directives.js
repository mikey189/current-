//begin directive for extension table//

//edit filetype


app.directive("editFiletype",["policyData", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var advanceModeButton = $("#show-advanced-filetype-button")
            var table = $("#filetype-table")
            element.click(function () {
                var self = $(this)
                if (!scope.ctrl.isTableEditable) {
                    console.log("first", scope.ctrl.isTableEditable)
                    advanceModeButton.removeClass("hidden")
                    table.removeClass("notEditable")
                    self.css("background-color", "red")
                    self.html("DONE")
                    scope.ctrl.isTableEditable = true;
                } else {
                    console.log("else ", scope.ctrl.isTableEditable)
                    advanceModeButton.addClass("hidden")
                    table.addClass("notEditable")
                    self.css("background-color", "#311B92")
                    policyData.postFiletype(scope.ctrl.policyId, scope.ctrl.types).then(function(answer){
                        console.log("server said  : ", answer)
                    })
                    self.html("EDIT")
                    scope.ctrl.isTableEditable = false;
                }
            })
        }
    }
}])


//animation to notify user to click on edit before being able to edit the table




app.directive("showExtensions", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                var extension = self.attr("index");
                var icon = self.find("md-icon");
                var advancedData = $(".advanced");

                if (!scope.ctrl.areExtensionsVisible[extension]) {
                    scope.ctrl.areExtensionsVisible[extension] = true;
                    icon.html("keyboard_arrow_down")
                    advancedData.removeClass("hidden")

                } else {
                    scope.ctrl.areExtensionsVisible[extension] = false;
                    icon.html("keyboard_arrow_right");
                }
scope.$apply()
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

//setting default value for selected option since chrome does not know how to interpret the selected attribute


//making indeterminate checkbox

app.directive("indeterminateState", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this)
                var children = $(".children-check")
                children.addClass("md-checked")
                scope.$apply()
            })
        }
    }
})