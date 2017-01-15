app.directive("editChannelSettings", function (channelData, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var settings_table = $(".channel-settings-table")
                if (!scope.ctrl.are_settings_editable) {
                    scope.ctrl.are_settings_editable = true
                } else {
                    //MAKE API CALL TO SEND DATA 
      
                    channelData.post_channel_settings(scope.ctrl.rootId, scope.ctrl.ChannelConfiguration).then(function (success) {
                        $timeout(function () {
                        scope.ctrl.ChannelConfiguration = success.data.ChannelInfo.ChannelConfiguration;
                        console.log("new configuration : ")
                        console.log(scope.ctrl.ChannelConfiguration)
                            scope.ctrl.RefreshView()
                        })
                    }, function (error) {
                        alert("error : " + error.data.Message)
                    })
                    scope.ctrl.are_settings_editable = false
                }
            })
        }
    }
})