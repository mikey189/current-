app.directive("closeSanitizationDetails", function ($mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                $mdDialog.cancel()
            })
        }
    }
})

app.directive("performAction", (sanitization_factory) => {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.bind("click", () => {
                var self = $(this);
                var id = self.attr("sanitization-id");
                var action = self.attr("action");
                var TaskIndicator = self.closest("#TaskIndicator");
                TaskIndicator.html("hourglass_full");
                sanitization_factory.perform_action(id, action).then((answer) => {
                    TaskIndicator.html("thumb_up");
                }, (error) => {
                    TaskIndicator.html("thumb_down");
                    alert("an error occured ", error.data.Message);
                });
            })

        }
    }
})