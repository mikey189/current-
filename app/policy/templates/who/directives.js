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
                var chip = $(this).parents("md-chip")
                var value = $(this);
                var addSign = $(this).find("md-icon");
                if (!scope.ctrl.isChannelAdded) {
                    chip.addClass("selectedChip");
                    addSign.html("remove")
                    addSign.css("color", "white");
                    scope.ctrl.isChannelAdded = true
                } else {
                    chip.removeClass("selectedChip");
                    addSign.html("add")
                    addSign.css("color", "#616161");
                    scope.ctrl.isChannelAdded = false

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
                var editButton = $("#editWhoSection")

                if (!scope.ctrl.isChannelEditable) {
                    editionZone.removeClass("notEditable")
                    editButton.html("DONE")
                    editButton.addClass("inEdition")
                    scope.ctrl.isChannelEditable = true
                } else {
                    editionZone.addClass("notEditable");
                    editButton.html("EDIT")
                    editButton.removeClass("inEdition")

                    scope.ctrl.isChannelEditable = false
                }
            })
        }
    }
})
