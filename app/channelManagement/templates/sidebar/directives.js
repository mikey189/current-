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


app.directive("deleteChannel", function ($mdDialog, channelData, $q, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var channel_id = self.attr("channel-id");
                var channel_name = self.attr("channel-name")
                var confirm = $mdDialog.confirm()
                    .title('You are about to delete a channel')
                    .textContent('You are about to delete the channel ' + channel_name)
                    .ariaLabel('delete channel')
                    .ok('Yes, delete this channel')
                    .cancel('Cancel deletion');
                $mdDialog.show(confirm).then(() => {
                    channelData.delete_channel(channel_id).then(result => {
                        console.log("successfully deleted channel : ", channel_id)
                        scope.ctrl.LoadSidenav();
                    }, error => {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog("We could not delete this channel", error.data.Message);
                    })
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
                    }, function (error) {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message);
                    })
            });
        }
    };
});

app.directive("getChannelGeneralInfo", function ($mdDialog) {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.click(() => {
                var self = $(this);
                console.log(self);
                var ChannelID = self.attr("channel-id");
                console.log(self.attr("channel-name"));
                var match = _.find(scope.ctrl.channel_list, function (channel) {
                    return channel.id == ChannelID;
                });
                console.log(match);
            })
        }
    }
})