app.directive("getMyId", ["C2CData","$state", function (C2CData, $state) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                console.log("clicked")
                var channel_id = parseInt(self.attr("_id"));
                console.log(channel_id)
                C2CData.set(channel_id)
                $state.reload("app.channelManagement.endpoint");

            })
        }
    }
}])
