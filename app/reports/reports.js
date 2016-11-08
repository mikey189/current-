app.controller("reports", ["policyChannels", "policyData", function (policyChannels, policyData) {

    var self = this;

    policyChannels.getAvailablechannels().then(function (answer) {

        self.availableChannels = answer.data;

    });

    self.currentChannels = [{
        "key": "Channel 1",
        "value": 1
    }, {
        "key": "Channel 2",
        "value": 1
    }, {
        "key": "Channel 3",
        "value": 1
    }];


    policyData.getFiletypes().then(function (answer) {
        self.filetype = answer.data
        console.log(self.filetype)
    })



}])
