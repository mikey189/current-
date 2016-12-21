app.controller("channels", ["C2CData", "channelData", "topCases", "$scope", function (C2CData, channelData, topCases, $scope) {

    var self = this;
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    //setting default id for the channel
    //set via directive


    /*-------------------- Sidebar ----------------------*/


    self.channel_list = []
    self.is_edit_mode_on = false;
    channelData.getchannelList().then(function (answer) {
        self.menuItems = answer.data;
        for (i = 0; i < self.menuItems.length; i++) {
            self.channel_list.push(self.menuItems[i])
        }
    })

    self.onDropComplete = function (index, obj, evt) {
        var otherObj = self.channel_list[index];
        var otherIndex = self.channel_list.indexOf(obj);
        self.channel_list[index] = obj;
        self.channel_list[otherIndex] = otherObj;
    }
    //making channelNm non editable by default
    self.is_channelName_editable = false;

    

    /*--------------------  Channel Input and Output --------------------*/


    //setting up initial array to store smbs objects
    self.ismbList = []
    self.osmbList = []
    self.rootId = typeof (C2CData.get()) == "number" ? C2CData.get() : 28;
    //watching for any change in channel id
    $scope.$watch(angular.bind(this, function () {
        return this.rootId;
    }), function (newVal) {
        channelData.get_channel(newVal).then(function (answer2) {
            self.channel_data = answer2.data
            self.channelInfo = answer2.data.ChannelInfo
            self.ChannelConfiguration = self.channelInfo.ChannelConfiguration
            self.generalInformations = self.channelInfo.GeneralInformations
            self.InputConfiguration = (typeof self.InputConfiguration === 'undefined') ? self.channelInfo.InputConfiguration : {};
            self.ismbList = (typeof self.ismbList === 'undefined') ? self.InputConfiguration.IoSmbConfiguration : [];
            self.OutputConfiguration = (typeof self.OutputConfiguration === 'undefined') ? self.channelInfo.OutputConfiguration : {};
            self.osmbList = (typeof self.osmbList === "undefined") ? self.OutputConfiguration.IoSmbConfiguration : [];
        })
    });
    //default view for dashboard is blocked
    self.isBlocked = true;
    channelData.getChannelDashboard(self.rootId).then(function (answer1) {
        self.channelDashboard = answer1.data
    })

    topCases.getTopCases().then(function (answer) {
        self.topCases = answer.data
    })
    self.label = ["Medium", "Low", "high"];

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

    self.deleteISMB = function (ISMB) {
        var index = self.ismbList.indexOf(ISMB)
        self.ismbList.splice(index, 1);
    }
    self.deleteOSMB = function (OSMB) {
            var index = self.osmbList.indexOf(OSMB)
            self.osmbList.splice(index, 1);
        }
        //making the settings not editable by default
    self.are_settings_editable = false



    /*--------------------  who is using this channel --------------------*/



    self.is_who_screen_editable = false;

    //getting available groups for a specific Channel
    channelData.get_channel_groups().then(function (answer) {
        self.channel_groups = answer.data
    })
    channelData.get_current_channel_groups().then(function (answer) {
            self.current_channel_groups = answer.data
        })
        //checking if this group is already being used, if it is the cased, the add button should be disabled
    self.isGroupInUse = function (group) {
        if (self.current_channel_groups.includes(group)) {
            return true
        } else {
            return false
        }
    }
    channelData.get_all_users().then(function (answer) {
        self.all_users = answer.data
    })
    channelData.get_current_users().then(function (answer) {
            self.current_users = answer.data
        })
        //checking is the user is already using this channel
    self.isUserInUse = function (user) {
        if (self.current_users.includes(user)) {
            return true
        } else {
            return false
        }
    }

    channelData.get_all_computers().then(function (answer) {
        self.all_computers = answer.data
    })
    channelData.get_current_computers().then(function (answer) {
        self.current_computers = answer.data
    })
    self.isComputerInUse = function (computer) {
        if (self.current_computers.includes(computer)) {
            return true
        } else {
            return false
        }

    }

    channelData.get_current_ips().then(function (answer) {
            self.current_ips = answer.data
        })
        //retrieving policy list
    channelData.get_policy_list().then(function (answer) {
        self.policyList = answer.data
    })
    self.current_policy = (typeof self.current_policy === 'undefined') ? self.current_policy : "no policy is yet associated to this channel";
    //in case we have multiple current policies 
}])