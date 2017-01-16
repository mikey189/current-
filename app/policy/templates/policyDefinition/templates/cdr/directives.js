app.directive("toggleCdrEdition", function (policyData) {
    return {
        restrict: "A",
        scope: {
            bindedValue: "=",
            value: "=value",
            policyId: "=policyId",
            key: "=",
            global: "=global"
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
                    var postData = {}
                    angular.forEach(scope.value, function (v, k) {
                        postData[k] = v;
                    });

                    var firstObject = {}
                    firstObject[scope.key] = postData
                    var object = {
                        "Description": "Policy CDR Settings",
                        "Values": scope.global
                    }
                    var object2send = []
                    object2send.push(object)


                    policyData.post_policy_settings(scope.policyId, object2send)
                    icon.html("edit")
                }
            })
        }
    }
})