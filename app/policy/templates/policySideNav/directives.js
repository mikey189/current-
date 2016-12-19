app.directive("getTopPolicyId", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.ready(function () {
                var self = $(this)
                var firstPolicyId = parseInt($(".policyItem").first().attr("policy-id"))
                scope.ctrl.policyId = firstPolicyId
                console.log(scope.ctrl.policyId)
            })
        }
    }
})

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
                    controller: "policy",
                    controllerAs: "ctrl",
                    scope: scope.$new(),
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
app.directive("confirmPolicyCreation", function ($mdDialog, policyData, $state) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                policyData.create_new_policy(scope.ctrl.PolicyInfo)
                console.log(scope.ctrl.PolicyInfo)
                $state.go("app.policy.definition.fileType")
                $mdDialog.cancel()
            })
        }
    }
})
app.directive("reorderPolicyList", ["policyData", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            element.bind("click", function () {
                var icon = $(this).find("md-icon")
                var items = $(".policyItem");
                var policyName = $(".editPolicyName")
                if (!scope.ctrl.sidenav_edit_mode) {
                    icon.addClass("animated  wobble");
                    icon.html("done_all");
                    icon.css("color", "#EC407A");
                    policyName.hide()
                    scope.ctrl.sidenav_edit_mode = true;
                    //items.addClass("animated bounce");
                } else {
                    icon.removeClass("animated wobble")
                    icon.html("format_line_spacing")
                    icon.css("color", "#23CCC7")
                    policyName.show();
                    scope.ctrl.sidenav_edit_mode = false;
                    // items.removeClass("animated bounce");        
                }
            })
        }
    }
}])

app.directive("toggleEditableMode", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var icon = $(this).find("md-icon")
                var policyName = $(this).siblings(".policyName")

                if (!scope.ctrl.isEditable) {
                    icon.html("done");
                    policyName.css("color", "orange");
                    policyName.addClass("animated flash")
                    scope.ctrl.isEditable = true;
                } else {
                    var policyName_value = policyName.html()
                    console.log(policyName_value)
                    icon.html("edit");
                    policyData.update_policy_name(scope.ctrl.policyId, policyName_value)
                    policyName.removeClass("animated flash")
                    policyName.css("color", "white")
                    scope.ctrl.isEditable = false;
                }
            })

        }
    }
})

app.directive("toggleNewPolicyEditableMode", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var icon = $(this).find("md-icon")
                var policyName = $(".newPolicyName")
                if (!scope.ctrl.isEditable) {
                    icon.html("done");
                    policyName.css("color", "orange");
                    policyName.addClass("animated flash")
                    scope.ctrl.isEditable = true;
                } else {
                    icon.html("edit");
                    policyName.removeClass("animated flash")

                    policyName.css("color", "white")
                    scope.ctrl.isEditable = false;
                }
            })

        }
    }
})

app.directive("deletePolicy", ["policyData", "$timeout", function (policyData, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                var cell = self.parents("md-list-item");
                var id = parseInt(cell.attr("policy-id"));
                console.log(id)
                cell.addClass("animated bounceOutRight");
                $timeout(function () {
                    cell.addClass("hidden")
                }, 500)
                policyData.deletePolicy(id)
                scope.$apply()
            })
        }
    }
}])

app.directive("initiateApiCallWithId", ["policyData", "$mdSidenav", function (policyData, $mdSidenav) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this);
                scope.ctrl.policyId = parseInt(self.attr("policy-id"));
                scope.$apply(function () {
                    scope.ctrl.get_policy_data(scope.ctrl.policyId)
                })
            })
        }
    }
}])