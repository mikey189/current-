app.directive("getMyId", ["$state", "C2CData", "channelData", function ($state, C2CData, channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                scope.$apply(function () {
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
            element.click( function () {
                console.log("foufoif")
                $state.go("app.channelManagement.newChannel");
            })
        }
    }
})


app.directive("deleteChannel", function ($mdDialog, channelData, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var channel_id = self.attr("channel-id");
                var p1 = self.parents();
                var cell = p1.closest("md-list-item")
                var channel_name = self.attr("channel-name")
                console.log(p1);
                var confirm = $mdDialog.confirm()
                    .title('You are about to delete a channel')
                    .textContent('You are about to delete the channel ' + channel_name)
                    .ariaLabel('delete channel')
                    .ok('Yes, delete this channel')
                    .cancel('Cancel deletion');
                $mdDialog.show(confirm).then(function () {
                    channelData.delete_channel(channel_id).then(function (answer) {
                        cell.addClass("animated fadeOutRight")
                        $timeout(function () {
                            cell.addClass("hidden")
                        }, 700)
                    });
                })
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
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('CONGRATS!')
                            .textContent('The ne priorities were successfully saved')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('AWSOME!')
                        );
                    }, function (error) {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('OOPS, ERROR')
                            .textContent('There was an error while updating the priorities : ' + error.data.Message)
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                        );
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
                    }, function (error) {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message);
                    })
            });
        }
    };
});