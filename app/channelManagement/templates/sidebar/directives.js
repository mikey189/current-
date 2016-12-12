app.directive("getMyId", ["C2CData", "$state", "channelData", function (C2CData, $state, channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                var channel_id = parseInt(self.attr("_id"));
                scope.$apply(function () {
                    C2CData.set(channel_id);
                    $state.reload("app.channelManagement.endpoint");
                });
            })
        }
    }
}])


app.directive("deleteChannel", function ($mdDialog, channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var channel_id = self.attr("channel-id")
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
                if (!scope.ctrl.is_edit_mode_on) {
                    scope.ctrl.is_edit_mode_on = true
                } else {
                    scope.ctrl.is_edit_mode_on = false
                }
            })
        }
    }
})