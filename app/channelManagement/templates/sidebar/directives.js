app.directive("getMyId", ["$state","C2CData","channelData", function ($state,C2CData, channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                scope.ctrl.rootId = parseInt(self.attr("_id"));
                console.log(scope.ctrl.rootId)
                //C2CData.set(scope.ctrl.rootId)
                scope.$apply()
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
                console.log(scope.ctrl.rootId)
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
                        console.log(answer)
                        cell.addClass("animated fadeOutRight")
                        $timeout(function () {
                            cell.addClass("hidden")

                        }, 700)
                    });
                }, function () {
                    console.log('You have cancelled.');
                });
            })
        }
    }
})

app.directive("channelSidenavEditMode", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var editIcon = $("#reorder_channels_icon")
                if (!scope.ctrl.is_edit_mode_on) {
                    scope.ctrl.is_edit_mode_on = true
                    editIcon.addClass("editOn")
                } else {
                    scope.ctrl.is_edit_mode_on = false
                    editIcon.removeClass("editOn")

                }
            })
        }
    }
})