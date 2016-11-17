app.directive("saveInfoGetId", function (channelData) {
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
                channelData.createChannel(channelObject).then(function(answer){
                    scope.ctrl.channelId = answer.data.Id
                    console.log(scope.ctrl.channelId)
                })
            })
        }
    }
})
