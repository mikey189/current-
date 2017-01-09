app.directive("editChannelSettings", function (channelData, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var settings_table = $(".channel-settings-table")
                if (!scope.ctrl.are_settings_editable) {
                    self.html("SAVE")
                    settings_table.removeClass("notEditable")
                    scope.ctrl.are_settings_editable = true
                } else {
                    //MAKE API CALL TO SEND DATA 
                    self.html("EDIT")
                    settings_table.addClass("notEditable")
                    channelData.post_channel_settings(scope.ctrl.rootId, scope.ctrl.ChannelConfiguration).then(function (success) {
                        //location.reload(true)
                        $timeout(function () {
                            scope.ctrl.ChannelConfiguration = success.data.ChannelInfo.ChannelConfiguration
                        }, 1)
                        console.log(scope.ctrl.ChannelConfiguration)
                    }, function (error) {
                        alert("error : " + error.data.Message)
                    })

                    scope.ctrl.are_settings_editable = false
                }
            })
        }
    }
})