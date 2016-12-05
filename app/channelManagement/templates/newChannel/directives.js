app.directive("saveInfoGetId", function (channelData, $state, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var channelType = $(".ncTypesHover").find(".ncTypeTitle").html()
                var channelObject = {
                    "GeneralInformations": {
                        "Name": scope.ctrl.channelName,
                        "ChannelTypeName": channelType,
                        "Description": scope.ctrl.channelDescription
                    }
                }
                scope.ctrl.gen_info = channelObject
                channelData.createChannel(channelObject).then(function (answer) {
                    scope.ctrl.rootId = answer.data.Id
                    console.log(scope.ctrl.rootId)
                    $state.go("app.channelManagement.endpoint.dashboard")
                    $timeout(function(){
                        $state.reload()
                    }, 700)
                })
                scope.$apply()
            })
        }
    }
})