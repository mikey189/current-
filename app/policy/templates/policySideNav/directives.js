app.directive("policyListHover", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.hover(function () {
                var self = $(this);
                self.toggleClass("policyListHover")
                self.toggleClass("md-whiteframe-12dp")
            })
        }
    }
})
app.directive("initNewPolicyModal", function ($mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                scope.ctrl.new_policy_title = "";
                $mdDialog.show({
                    scope: scope, // use parent scope in template
                    preserveScope: true,
                    clickOutsideToClose: true,
                    templateUrl: "app/policy/templates/policySideNav/new_policy_modal.tmpl.html",
                    parent: angular.element(document).find("body")
                })
            })
        }
    }
})

app.directive("cancelPolicyCreation", function ($mdDialog) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind("click", function () {
                    $mdDialog.cancel()
                })
            }
        }
    })
    //create policy call from controller

app.directive("renamePolicy", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                var p1 = self.parents();
                var name = p1.closest("md-list-item").find(".policyName").html()
                var id = self.attr("policy-id")
                policyData.update_policy_name(id, name).then(function (success) {
                    scope.ctrl.show_success_dialog("Policy name successfully saved");
                    scope.ctrl.policy.Name = name;
                }, function (error) {
                    scope.ctrl.show_error_dialog("The new name for this policy could not be saved", error.data.Message)
                })
            })
        }
    }
})




app.directive("deletePolicy", ["policyData", "$q", "$mdDialog", function (policyData, $q, $mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                var cell = self.parents().closest(".policyItem");
                var PolicyName = self.attr("policy-name");
                var id = parseInt(self.attr("policy-id"));

                var confirm = $mdDialog.confirm()
                    .title('You are about to delete a channel')
                    .textContent('You are about to delete the Policy ' + PolicyName)
                    .ariaLabel('Delete Policy')
                    .ok('Yes, delete this policy')
                    .cancel('Cancel');
                $mdDialog.show(confirm).then(function () {
                    policyData.deletePolicy(id).then(success => {
                        scope.ctrl.RefreshSidenav();
                    }, error => {
                        scope.ctrl.show_error_dialog("This policy could not be delete ", error.data.Message)
                    })
                })
            })
        }
    }
}])

app.directive("initiateApiCallWithId", (policyData, $mdSidenav, $state) => {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.bind("click", function () {
                var self = $(this);
                scope.$apply(() => {
                    scope.ctrl.policyId = parseInt(self.attr("policy-id"));
                    $state.go("app.policy.dashboard");
                })
            })
        }
    }
})