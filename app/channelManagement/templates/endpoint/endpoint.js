app.controller("channelManagementEndpoint", ["C2CData", "channelData", "users", "topCases", function (C2CData, channelData, users, topCases) {

    var self = this;
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];

    self.rootId = typeof (C2CData.get()) == "number" ? C2CData.get() : 1;

    channelData.getChannelDashboard(self.rootId).then(function (answer) {
        
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

    self.stateConfig;

    //top users loading from db.json because there are more instances of users (just nice to render)

    users.getUsers().then(function (response) {
        self.users = response
    })

    //loading topCases from db.json as well because the names are more realistic there 

    topCases.getTopCases().then(function (answer) {
        self.topCases = answer.data
    })

    self.label = ["Medium", "Low", "high"];

    self.isBlocked = false;
    self.isProcessed = false;
    self.test = "BlockededNumber"

}])
