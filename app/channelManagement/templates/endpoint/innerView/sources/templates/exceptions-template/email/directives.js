app.directive("saveEmailSettings", function (channelData,$mdDialog, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                var postData =scope.ctrl.EmailSettings; 
  channelData.update_inputs_outputs(scope.ctrl.rootId, postData).then( (success) => {
                        scope.ctrl.HTTP_Dialogs.ShowSuccessDialog();
                        scope.ctrl.UpdateChannelData(success.data.Id);
                    },  (error) => {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message);
                    })
            })
        }
    }
})


