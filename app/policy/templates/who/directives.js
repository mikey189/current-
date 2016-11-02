app.directive("showRelatedUsers", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var tmpl = "<h1>Jonathan</h1>"
            element.click(function () {
                var self = $(this)
                var icon = self.children("md-icon")
                if (scope.ctrl.areUsersVisible) {
                    icon.html("keyboard_arrow_right");
                    tmpl.after(self)
                    self.siblings(".groupUsers").addClass("hidden")
                    scope.ctrl.areUsersVisible = false
                } else {
                    icon.html("keyboard_arrow_down");
                    scope.ctrl.areUsersVisible = true;
                    self.siblings(".groupUsers").removeClass("hidden")
                }
            })
        }
    }
})

app.directive("addChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                var chip = self.parents("md-chip")
                var addSign = self.find("md-icon");
                var chipValue = parseInt(self.attr("_value"));
                var chipKey = self.attr("_key");
                var chipObject = {
                    chipValue: chipValue,
                    chipKey: chipKey
                }
                if (chip.hasClass("selectedChip")) {
                    chip.removeClass("selectedChip")
                    addSign.html("add");
                    addSign.css("color", "#616161");
                    var index = scope.ctrl.currentChannels.indexOf(chipObject)
                    scope.ctrl.currentChannels.splice(index, 1);
                    scope.$apply();
                } else {
                    chip.addClass("selectedChip")
                    addSign.html("remove")
                    addSign.css("color", "white");
                    if (scope.ctrl.currentChannels.indexOf(chipObject) === -1) {
                        scope.ctrl.currentChannels.push(chipObject);
                    }
                    scope.$apply();
                }
            })
        }
    }

})



app.directive("blockEdition", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            var editButton = $("#editChannels")
            var editionZone = $(".channelEditionZone");
            element.click(function () {
                if (!scope.ctrl.isChannelEditable) {
                    editButton.addClass("animated shake")
                } else {
                    editButton.removeClass("animated shake")
                }
            })
        }
    }
})

app.directive("toggleEdition", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            element.click(function () {
                var editionZone = $(".channelEditionZone");
                var editButton = $("#editWhoSection");
                var channelTopBar = $("#channelTopBar");

                if (!scope.ctrl.isChannelEditable) {
                    editionZone.removeClass("notEditable")
                    channelTopBar.removeClass("hidden")
                    editButton.html("DONE")
                    editButton.addClass("inEdition")
                    scope.ctrl.isChannelEditable = true
                } else {
                    editionZone.addClass("notEditable");
                    channelTopBar.addClass("hidden")
                    editButton.html("EDIT")
                    editButton.removeClass("inEdition")

                    scope.ctrl.isChannelEditable = false
                }
            })
        }
    }
})


app.directive("initiateApiCallWithId", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this);
                scope.ctrl.policyId = parseInt(self.attr("_id"));
                console.log(scope.ctrl.policyId)
            })
        }
    }
})