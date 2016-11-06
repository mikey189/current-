//all directives for eidting channels//

app.directive("editChannels", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                var icon  = self.find("md-icon");
                
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
                    icon.html("keyboard_arrow_down");
                } else {
                    scope.ctrl.areExtensionsVisible[extension] = false;
                    icon.html("keyboard_arrow_right");
                }
                console.log(scope.ctrl.types)
            })
        }
    }
})
app.directive("filetypeSizeLimit", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this); 
                var size = self.siblings("input")
                var icon = self.find("md-icon")

                if (!scope.ctrl.isSizeEditable) {
                    size.attr("readonly", false)
                    icon.html("done");
                    scope.ctrl.isSizeEditable = true;
                }else{
                    size.attr("readonly", true);
                    icon.html("edit");
                    scope.ctrl.isSizeEditable = false;
                }
                $("#injectMe").append(scope.ctrl.types)
            })
        }
    }
})
