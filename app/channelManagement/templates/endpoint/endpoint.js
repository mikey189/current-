app.controller("channelManagementEndpoint", ["C2CData", "channelData", "users", "topCases", "$scope", function (C2CData, channelData, users, topCases, $scope) {

    var self = this;
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    //setting default id for the channel
    self.rootId = typeof (C2CData.get()) == "number" ? C2CData.get() : 7;
    //setting up initial array to store smbs objects
    self.ismbList = []
    self.osmbList = []
        //watching for any change in channel id
    $scope.$watch(angular.bind(this, function () {
        return this.rootId;
    }), function (newVal) {
        channelData.get_channel(newVal).then(function (answer) {
            self.channel_data = answer.data
            self.channelInfo = answer.data.ChannelInfo
            self.ChannelConfiguration = self.channelInfo.ChannelConfiguration
            self.generalInformations = self.channelInfo.GeneralInformations
            self.InputConfiguration = self.channelInfo.InputConfiguration
            self.ismbList = self.InputConfiguration.IoSmbConfiguration
            self.OutputConfiguration = self.channelInfo.OutputConfiguration
            self.osmbList = self.OutputConfiguration.IoSmbConfiguration
        })
    });
    //default view for dashboard is blocked
    self.isBlocked = true;
    //retrieving the dashboard according to channel id
    channelData.getChannelDashboard(self.rootId).then(function (answer) {
            self.channelDashboard = answer.data
        })
        //top users loading from db.json because there are more instances of users (just nice to render)
    users.getUsers().then(function (response) {
            self.users = response
        })
        //loading topCases from db.json as well because the names are more realistic there 
    topCases.getTopCases().then(function (answer) {
        self.topCases = answer.data
    })
    self.label = ["Medium", "Low", "high"];
    //loading computer list 
    //setting inputs and outputs screen to not editable by default
    self.are_outputs_and_outputs_editable = false;
    //getting input and output list for "input and ouput" view
    channelData.get_input_output_list().then(function (answer) {
            self.all_inputs = answer.data[0].inputs
            self.iROW_1 = answer.data[0].inputs.slice(0, 3)
            self.iROW_2 = answer.data[0].inputs.slice(3, 6)
                //default property for selecting input or ouput
            self.is_input_selected = false;
        })
        //storing selected inputs and outputs

    // self.selectedInputs = []
    // self.selectedOutputs = []



    //function that add objects for iSMB and oSMB on ng-checked
    self.addISMB = function () {
        var iSMB = {}
        self.ismbList.push(iSMB)
    }
    self.addOSMB = function () {
        var oSMB = {}
        self.osmbList.push(oSMB)
    }

    //making the settings not editable by default
    self.are_settings_editable = false

    self.deleteISMB = function (ISMB) {
        var index = self.ismbList.indexOf(ISMB)
        console.log(self.ismbList)
        self.ismbList.splice(index, 1);
        console.log("deleting ISMB")
    }
    self.deleteOSMB = function (OSMB) {
        var index = self.osmbList.indexOf(OSMB)
        self.osmbList.splice(index, 1);
        console.log("deleting OSMB")
    }
}])