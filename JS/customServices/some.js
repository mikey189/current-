app.factory("cdrFormatter", () => {
    return {
        format: (cdr) => {
            var bigObject = [];
            var secondObj = [];
            var dots = ":";
            for (i in cdr) {
                if (cdr[i].Type !== "FacetPropertyType_SingleChoice") {
                    var type = cdr[i].InternalName;
                    _.each(cdr[i].AvailableValues, (key, value) => {
                        var obj = {};
                        obj.section = key[0];
                        obj.category = key[1];
                        obj.action = key[2];
                        obj.severity = key[3];
                        obj.InternalName = type;
                        obj.description = key[4];
                        obj.UID = key[0] + dots + key[1] + dots + key[2] + dots + key[3] + dots + key[4]
                        bigObject.push(obj);
                    })
                }
            }
            var arr = [];
            var flatten1 = _.chain(bigObject).groupBy('section')
                .toPairs().map((pair) => {
                    return _.zipObject(['section', 'other'], pair);
                }).value();
            for (var x = 0, len = flatten1.length; x < len; x++) {
                var y = {};
                y[flatten1[x].section] = _.chain(flatten1[x].other).groupBy('category')
                    .toPairs().map((child) => {
                        return _.zipObject(['L1', 'L2'], child);
                    }).value();

                arr.push(y);
            }
            var ex = [];
            
           
            console.log(ex)
            console.log(arr)
                /*for (x in bigObject){
                    var obj = {};
                    obj.category =  _.trim(bigObject[x], ":");
                    secondObj.push(obj)
                }*/
            return arr;
        }
    }
})