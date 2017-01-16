app.directive("savePolicySettings", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var settingsDOMElement = $("#policySettingsContainer")
                if (!scope.ctrl.areSettingsEditable) {
                    self.html("SAVE")
                    scope.ctrl.areSettingsEditable = true
                    settingsDOMElement.removeClass("not-editable")
                } else {
                    self.html("EDIT")
                    scope.ctrl.areSettingsEditable = false
                    settingsDOMElement.addClass("not-editable")
                    scope.ctrl.post_policy_settings(scope.ctrl.PolicyFacets)
                }
            })
        }
    }
})