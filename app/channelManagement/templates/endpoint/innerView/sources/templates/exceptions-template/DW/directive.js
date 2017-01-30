app.directive("editDwSources", function (channelData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (!scope.ctrl.DWSourcesAreEditable) {
                    scope.ctrl.DWSourcesAreEditable = true;
                } else {
                    scope.ctrl.DWSourcesAreEditable = false;
                    channelData.update_inputs_outputs(scope.ctrl.rootId, scope.ctrl.DW).then(function (success) {
                        scope.ctrl.HTTP_Dialogs.ShowSuccessDialog()
                        scope.ctrl.UpdateChannelData(success.data.Id)
                    }, function (error) {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message)
                    })
                }
            })
        }
    }
})