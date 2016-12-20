app.directive("getMyId", ["$state", "C2CData", "channelData", function ($state, C2CData, channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                scope.ctrl.rootId = parseInt(self.attr("_id"));
                //C2CData.set(scope.ctrl.rootId)
                var channelType = self.attr("channel-type")
                scope.$apply(function () {
                    if (channelType == 3) {
                        scope.ctrl.is_single_policy = false
                    } else {
                        scope.ctrl.is_single_policy = true;
                    }
                })
            })
        }
    }
}])

app.directive("initId", function () {
    return {
        restrict: "E",
        link: function (scope, element, attrs) {
            element.ready(function () {
                scope.ctrl.rootId = parseInt($(".channelSidenavItems").first().attr("channel-id"))
                scope.$apply()
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
                var channel_id = self.attr("channel-id")
                var cell = self.closest("md-list-item")
                console.log(channel_id)
                var channel_name = self.attr("channel-name")
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
                }, function () {});
            })
        }
    }
})

app.directive("channelSidenavEditMode", function (channelData) {
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
                        alert("order successfully saved " + success.data)
                    }, function (error) {
                        alert("an error occured : " + error.data.Message)
                    })
                    editIcon.removeClass("editOn")
                }
            })
        }
    }
})