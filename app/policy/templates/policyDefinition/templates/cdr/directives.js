app.directive("toggleCdrEdition", function (policyData) {
    return {
        restrict: "A",
        scope: {
            bindedValue: "=",
            value: "=value",
            policyId: "=policyId",
            key: "="
        },
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var self = $(this)
                var icon = self.find("md-icon")
                if (!scope.bindedValue) {
                    scope.bindedValue = true
                    icon.html("save")
                } else {
                    scope.bindedValue = false
                    console.log(scope.value)

                    var postData = {}

                    angular.forEach(scope.value, function (v, k) {

                        postData[k] = v;

                    }, postData);

                    var firstObject = {}
                    firstObject[scope.key] = postData
                    var object = {
                        "Description": "Policy CDR Settings",
                        "Values": firstObject
                    }

                    console.log(object)

                    policyData.post_policy_settings(scope.policyId, [object]).then(function (success) {
                        console.log(success)
                    }, function (error) {
                        console.log(error)
                    })
                    icon.html("edit")
                }
            })
        }
    }
})