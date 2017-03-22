app.directive("saveInfoGetId", function (channelData, $state, $stateParams) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var channelType = $(".ncTypesHover").find(".ncTypeTitle").html()
                var NewChannelParam = {
                    "GeneralInformations": {
                        "Name": scope.ctrl.channelName,
                        "ChannelTypeName": channelType,
                        "Description": scope.ctrl.channelDescription
                    }
                }
                scope.ctrl.gen_info = NewChannelParam
                channelData.createChannel(NewChannelParam).then(function (answer) {
                    scope.ctrl.rootId = answer.data.Id;
                        scope.ctrl.channel_list.push(answer.data);   
                        $state.go('app.channelManagement.endpoint.dashboard', {
                            ChannelId: answer.data.Id
                        });
                    },

                    function (error) {

                        alert("there was an error : " + error.data.Message)

                    })

            })
        }
    }
})