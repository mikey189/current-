app.directive("editWhoScreen", function (channelData, $mdDialog, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var edit_button = $("#edit-who-screen")
            element.bind("click", function () {
                var postData = scope.ctrl.FormatChannelFacetsBeforePOST()
                $timeout(() => {
                    channelData.updateWhoIsUsing(scope.ctrl.rootId, postData).then((success) => {
                        scope.ctrl.HTTP_Dialogs.ShowSuccessDialog()
                        scope.ctrl.UpdateChannelData(success.data.Id)
                    }, (error) => {
                        scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message) //->parameter is the error message to disply inside the Dialog
                    })
                })
            })
        }
    }

})


app.directive("addIp", function () {
    return {
        restrict: "A",
        scope: {
            value: "=",
            container: "="
        },
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                console.log(scope.container)
                scope.container = (scope.container == "") ? [] : scope.container

                if (!scope.container.includes(scope.value)) {
                    scope.$apply(function () {
                        scope.container.push(scope.value)

                    })

                } else {
                    alert(scope.value + " is already in use !")
                }

            })
        }
    }
})