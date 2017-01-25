app.directive("savePolicySettings", function (FacetFormatter, policyData) {
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
                    var formatted =
                        FacetFormatter.FormatForPOST(scope.ctrl.PolicyFacets)
                    policyData.post_policy_settings(scope.ctrl.policyId, formatted).then(function () {

                        scope.ctrl.show_success_dialog("congrats")
                        scope.ctrl.getPolicyInfo(scope.ctrl.policyId)

                    }, function (error) {
                        scope.ctrl.show_error_dialog("error", error.data.Message)

                    })


                }
            })
        }
    }
})