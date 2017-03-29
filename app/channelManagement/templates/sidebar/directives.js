app.directive("getMyId", ["$state", "channelData", function ($state, channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                scope.$apply(() => {
                    scope.ctrl.rootId = parseInt(self.attr("channel-id"));
                })
            })
        }
    }
}])


app.directive("goToChannelCreation", function ($state) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                $state.go("app.channelManagement.newChannel");
            })
        }
    }
})

app.directive("channelSidenavEditMode", function (channelData, $mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {

                var editIcon = $("#reorder_channels_icon")
                var channels = $(".channelSidenavItems")

                if (!scope.ctrl.is_edit_mode_on) {
                    scope.ctrl.is_edit_mode_on = true
                    editIcon.addClass("editOn")
                } else {
                    scope.ctrl.is_edit_mode_on = false
                    var channelsOrder = []
                    channels.each(function () {
                        var channelID = parseInt($(this).attr("channel-id"))
                        channelsOrder.push(channelID)
                    })
                    channelData.reorder_channel_priority(channelsOrder).then(function (success) {
                        scope.ctrl.HTTP_Dialogs.ShowSuccessDialog();
                    }, function (error) {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message);
                    })
                    editIcon.removeClass("editOn")
                }
            })
        }
    }
})

app.directive("renameChannel", function (channelData, $mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var ChannelID = self.parents("md-list-item").attr("channel-id");
                var ChannelName = self.parents("md-list-item").find("a").html();
                var editable = Boolean(self.parents("md-list-item").attr("editable"));
                channelData.updateChannelName(ChannelID, ChannelName)
                    .then(function (success) {
                        scope.ctrl.HTTP_Dialogs.ShowSuccessDialog();
                        scope.ctrl.rootId = ChannelID;
                    }, function (error) {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message);
                    })
            });
        }
    };
});

