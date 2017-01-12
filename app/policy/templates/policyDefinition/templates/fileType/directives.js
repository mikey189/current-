app.directive("saveFiletypes", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (!scope.ctrl.isFiletypeEditable) {
                    scope.ctrl.isFiletypeEditable = true
                } else {
                    angular.forEach(scope.ctrl.PolicyFacets["Policy Filetypes Settings"], function (L0Value, L0Key) {
                        var object = {}
                        angular.forEach(L0Value, function (L1Value, L1Key) {
                            var ExtensionValues = ""
                            var SubStr = ""
                                //L1Key example : StrPropType_FileTypePropertyName_Archives
                                //L1Value example : // [object nupkg : {}]
                                //example of value to store : Archives:nupkg:True:True:0:True:False:False:False:False:False:
                            var biggerArr = []
                            angular.forEach(L1Value, function (L2Value, L2Key) {
                                //L2Key = nupkg
                                //L2Value = Object {isAllowed: false, SizeLimit: Object}
                                var str = ""
                                angular.forEach(L2Value, function (L3Value, L3Key) {
                                        var L3Object = {}
                                        var value = ""
                                        if (L3Key === "SizeLimit") {

                                            value = L3Value.Size + L3Value.Unit

                                        } else {

                                            value = L3Value

                                        }
                                        str += value + ":"

                                    })
                                    //extracting the name of parent category for L1Key
                                var regexKey = L1Key.match("[^_]*$")
                                var ext = regexKey + ":" + L2Key + ":" + str
                                    //removing last ':'
                                ext = ext.substring(0, ext.length - 1);
                                biggerArr.push(ext)
                            })
                            object[L1Key] = biggerArr

                        })
                        console.log(object)
                    })

                }
            })
        }
    }
})