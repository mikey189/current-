app.controller("reports", ["channelData", function (channelData) {

    var self = this;


    channelData.getChannelDashboard(1).then(function (answer) {
        self.data = answer.data
        self.fileTypeList = self.data.TopFilesTypeList
        self.filter = function () {
            var ftArray = [];
            for (var i = 0, len = self.fileTypeList.length; i < len; i++) {
                var file = {};
                file.name = self.fileTypeList[i].Filetype;
                if (self.state) {
                    file.state = self.fileTypeList[i].ProcessedNumber
                } else {
                    file.state = self.fileTypeList[i].BlockededNumber
                }
                ftArray.push(file)
            }
            return ftArray
        }
    })


}])
