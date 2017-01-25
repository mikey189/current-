app.factory("FacetFormatter", function () {
    return {
        FormatForPOST: function (Facet) {
            var Facets2POST = [];
            angular.forEach(Facet, function (L0Value, L0Key) {
                var NewFacet = {
                    "Description": L0Key,
                    "Values": {}
                }
                angular.forEach(L0Value.Values, function (L1Value, L1Key) {
                    console.log(L1Key + ":" + L1Value)
                    if (L0Value.hasOwnProperty("Template")) {
                        var KeyType = L0Value.Template.Properties[L1Key].Type
                        switch (KeyType) {
                            case "FacetPropertyType_MultiChoice":
                                var ObjectString = "";
                                angular.forEach(L1Value, function (MCValue, MCKey) {
                                    var PropString = "";
                                    angular.forEach(MCValue, function (MC1Value, MC1Key) {
                                        PropString += MC1Value + ":"
                                    })
                                    PropString = PropString.substring(0, PropString.length - 1);
                                    ObjectString += MCKey + "=" + PropString + "|"
                                })
                                ObjectString = ObjectString.substring(0, ObjectString.length - 1);
                                NewFacet.Values[L1Key] = ObjectString
                                break;
                            default:
                                NewFacet.Values[L1Key] = L1Value.toString()
                                break;

                        }
                    }

                })

                Facets2POST.push(NewFacet)

            })

            console.log(Facets2POST)

        }

    }

})