app.directive("ediPolicySettings", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                console.log("clicked")
                scope.ctrl.policySettingsObject = {
                    "PolicyId": scope.ctrl.PolicyId,
                    "Settings": scope.ctrl.PolicyFacets
                }
                console.log(scope.ctrl.policySettingsObject)
            })

        }
    }
})