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

app.directive("performEmailAction", (sanitization_factory, ToastNotifications) => {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.click(function() {
                var self = $(this);
                var id = self.attr("sanitization-id");
                var action = self.attr("action");
                var recipient = self.attr("from");
                var row = self.parents("tr");
                var TaskIndicator = self.find("#TaskIndicator");
                TaskIndicator.html("hourglass_full");
                sanitization_factory.perform_action(id, action).then((answer) => {
                    TaskIndicator.html("thumb_up");
                    ToastNotifications.SuccessToast("Action successfully performed on mail from "+recipient);
                    row.addClass("action-success");
                }, (error) => {
                    TaskIndicator.html("thumb_down");
                    ToastNotifications.ErrorToast("Error : "+error.data.Message);
                    row.addClass("action-failed");
                    alert("an error occured ", error.data.Message);
                });
            })

        }
    }
})