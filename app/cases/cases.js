app.controller("cases", ["policyData", function (policyData) {

    var c = this;
    c.data;
    c.dataSet = [];
    c.obj = {};
    policyData.getData().then(function (answer) {
        c.data = answer;
        for (i = 0; i < c.data.length;) {
            c.dataSet.push(c.data[i]);
            i++;
        }

    })

}])
