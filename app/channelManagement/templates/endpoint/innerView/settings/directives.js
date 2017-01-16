app.directive("editChannelSettings", function (channelData, $mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var settings_table = $(".channel-settings-table")
                if (!scope.ctrl.are_settings_editable) {
                    scope.ctrl.are_settings_editable = true
                } else {
                    channelData.post_channel_settings(scope.ctrl.rootId, scope.ctrl.ChannelConfiguration).then(function (success) {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Your changes were successfully saved')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                        );
                    }, function (error) {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Error')
                            .textContent('Your changes could not be saved : ' + error.data.Message)
                            .ariaLabel('Alert Dialog Demo')
                            .ok('OK!')
                        );
                    })
                    scope.ctrl.are_settings_editable = false
                }
            })
        }
    }
})