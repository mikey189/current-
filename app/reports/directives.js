//all directives for eidting channels//

app.directive("editChannels", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                var icon = self.find("md-icon");

                if (!scope.ctrl.areChannelsEditable) {
                    scope.ctrl.areChannelsEditable = true;
                    icon.html("done");
                } else {
                    scope.ctrl.areChannelsEditable = false;
                    icon.html("edit");
                }
            })
        }
    }
})


app.directive("addThisChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                var chipTmpl = self.closest("md-chip");


                var key = self.parent("md-chip-template").attr("_key");
                var value = parseInt(self.parent("md-chip-template").attr("_value"));
                var chip = {
                    key: key,
                    value: value
                }
                if (typeof (scope.ctrl.currentChannels[chip.value]) === "undefined") {
                    scope.ctrl.currentChannels.push(chip);
                    chipTmpl.addClass("not-editable-chip")

                } else {
                    console.log("already exists")
                }

                scope.$apply();
            })
        }
    }
})


app.directive("deleteChannel", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.click(function () {})
            }
        }
    })
    // end fo channel edition//





//begin directive for extension table//

//edit filetype

app.directive("editFiletype", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var advanceModeButton = $("#show-advanced-filetype-button")
            var table = $("#filetype-table")
            var lockIcon = $("#lock-icon")
            element.click(function () {
                var self = $(this)
                if (!scope.ctrl.isTableEditable) {
                    advanceModeButton.removeClass("hidden")
                    table.removeClass("notEditable")
                    self.css("background-color", "red")
                    self.html("DONE")
                    scope.ctrl.isTableEditable = true
                } else {
                    advanceModeButton.addClass("hidden")
                    table.addClass("notEditable")
                    self.css("background-color", "#311B92")
                    self.html("EDIT")
                    scope.ctrl.isTableEditable = false
                }
            })
        }
    }
});

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
                console.log(scope.ctrl.types)

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

app.directive("selectOption", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            $(document).ready(function () {
                var selectedOption = $(".to-select")
                selectedOption.attr("selected", "selected")
            })
        }
    }
})

// check All 

app.directive("postFt", ["policyData", function(policyData){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
               //without extend it does not work 
                policyData.postFiletype({$.extend({}, scope.ctrl.types)})
                console.log("dummy : ", scope.ctrl.dummy)
                console.log("extend : ", $.extend({}, scope.ctrl.types))
                
            })
        }
    }
}])