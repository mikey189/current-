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
                console.log("about to ")

                channelData.createChannel(channelObject)
                    .then(function (answer) {
                        console.log(answer.data.Id)
                        scope.ctrl.UpdateChannelData(answer.data.Id)
                        $state.go("app.channelManagement.endpoint.dashboard")
                        location.reload(true)
                    }),
                    function (error) {
                        alert("there was an error : " + error.data.Message)
                    }
            })
        }
    }
})