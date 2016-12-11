app.directive("getMyId", ["C2CData", "$state","channelData", function (C2CData, $state, channelData) {
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
