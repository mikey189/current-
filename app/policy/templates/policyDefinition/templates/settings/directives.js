app.directive("savePolicySettings", function (FacetFormatter, policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                if (!scope.ctrl.areSettingsEditable) {
                    scope.ctrl.areSettingsEditable = true
                } else {
                    scope.ctrl.FormatForPOST();
                    scope.ctrl.areSettingsEditable = false;
                }
            })
        }
    }
})