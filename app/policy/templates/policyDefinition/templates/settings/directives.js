app.directive("savePolicySettings", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                if (!scope.ctrl.areSettingsEditable) {
                    self.html("SAVE")
                    scope.ctrl.areSettingsEditable = true
                } else {
                    self.html("EDIT")
                    scope.ctrl.areSettingsEditable = false
                    scope.ctrl.post_policy_settings(scope.ctrl.PolicyFacets)
                }
            })
        }
    }
})