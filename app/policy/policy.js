app.controller('policy', ["policyData", "channelData", "policyChannels", "policyUsers", function (policyData, channelData, policyChannels, policyUsers) {

    var self = this;

    self.policyId = 2;
    //dragMode for policySideNav

    self.draggableObjects = [];

    policyData.getSidenav().then(function (answer) {
        self.sideNavList = answer.data
        for (i in self.sideNavList) {
            self.draggableObjects.push(self.sideNavList[i])
        }
    })
    //initiating the object to send the name to API when creating channel -> only PolicyName is required from server

    self.model ={};

    self.onDropComplete = function (index, obj, evt) {
        var otherObj = self.draggableObjects[index];
        var otherIndex = self.draggableObjects.indexOf(obj);
        self.draggableObjects[index] = obj;
        self.draggableObjects[otherIndex] = otherObj;
    }

    self.dragMode = false;
    self.newPolicy = false;
    self.isEditable = false;
    self.is_policy_sidenav_editable = false;


    //getDashboard data with policyId
    //API Call inside directive :"initiateApiCallWithId" 


    policyData.getDashboard(self.policyId).then(function (answer) {
        self.dashboardData = answer.data;
    })


    //filetypes

    //getting filetypes
    policyData.getFiletypes().then(function (answer) {
            self.filetype = answer.data
        })
        //creating object to store properties and all changes
    self.types = {};
    //settings default values for DOM Manipulations
    self.areExtensionsVisible = [];
    self.isAdvancedModeOn = false;
    self.isTableEditable = false;


    //who is using this policy settings

    channelData.getComputerList().then(function (answer) {
        self.users = answer.data;
    })
    policyUsers.getData().then(function (answer) {
        self.data = answer.data
    })
    policyChannels.getAvailablechannels().then(function (answer) {

        self.data = answer.data;
        self.available_channels = []
        for (i in self.data) {
            self.available_channels.push(self.data[i])
        }
    });

    // setting the toggling mode for editing groups

    self.are_groups_editable = false

    //setting the toggling mode for editing users

    self.are_users_editable = false

    //making channels draggable 

    self.currentChannels = []
        //assign a channel

    //available channel successfully dumped insinde current channels

    self.drop_success_current_channels = function (data, event) {
        var channel_index = self.currentChannels.indexOf(data)
        var old_index = self.available_channels.indexOf(data)
        if (channel_index == -1) {
            self.currentChannels.push(data)
        }
        if (old_index > -1) {
            self.available_channels.splice(old_index, 1)
        }
    }

    //successfully removed channel from current channel

    self.remove_current_channel = function (data, event) {
        var channel_index = self.currentChannels.indexOf(data)
        if (channel_index > -1) {
            self.currentChannels.splice(channel_index, 1)
        }
    }

    //reassigning a channel into available_channels

    self.reassign_channel = function (data, event) {
        var channel_index = self.available_channels.indexOf(data)
        if (channel_index == -1) {
            self.available_channels.push(data)
        }
    }

    //removing channel from available_channels
    self.remove_channel_from_available = function (data, event) {
            var channel_index = self.available_channels.indexOf(data)
            if (channel_index > -1) {
                self.available_channels.splice(channel_index, 1)
            }
        }
        //getting list of scanners for policy defintion

    policyData.get_fireEye_servers().then(function (answer) {
        self.fireEye_servers_list = answer.data
    })
    policyData.get_cukoo_servers().then(function (answer) {
            self.cukoo_servers_list = answer.data
        })
        //this object will store all the info changed inside the scanner list
    
    self.scanners_settings = {

        "allowed_fireEyes" : []
        
    }

}])
