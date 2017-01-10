app.controller("channels", ["C2CData", "channelData", "$scope", function (C2CData, channelData, $scope) {

    var self = this;
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    //setting default id for the channel
    //set via directive

    /*-------------------- Sidebar ----------------------*/


    self.channel_list = []
    self.is_edit_mode_on = false;
    channelData.getchannelList().then(function (answer) {
        self.menuItems = answer.data;
        //retriving the first ID of the list
        self.rootId = self.menuItems[0].Id;
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

    //this function is called everytime channel ID changes or after channel creation

    self.UpdateChannelData = function (newVal) {
        channelData.get_channel(newVal).then(function (answer) {
//this code is the source of major issues fix the if/else inline statements 
            self.channel_data = answer.data

            self.channelInfo = answer.data.ChannelInfo
            self.ChannelConfiguration = self.channelInfo.ChannelConfiguration
            self.generalInformations = self.channelInfo.GeneralInformations

            self.InputConfiguration = (self.channelInfo.InputConfiguration === null ) ?  new Object() : self.channelInfo.InputConfiguration  
            //Object.keys(self.channelInfo.InputConfiguration).length === 0
            self.ismbList = (self.InputConfiguration.IoSmbConfiguration === null ) ? [] : self.InputConfiguration.IoSmbConfiguration 
            self.OutputConfiguration = (self.channelInfo.OutputConfiguration === null ) ? {} : self.channelInfo.OutputConfiguration
            self.osmbList = (self.OutputConfiguration.IoSmbConfiguration === null) ? [] : self.OutputConfiguration.IoSmbConfiguration
            self.ChannelFacets =  (self.channel_data.ChannelFacets === null) ?  {
                "Channel Usage Settings": {
                    "Values": {}
                }
            } : self.channel_data.ChannelFacets 
        
            channelData.whoIsUsing().then(function (answer) {
                self.whoData = answer.data
                angular.forEach(self.whoData['Channel Usage Settings'].Properties, function (value, key) {
                        if (self.ChannelFacets['Channel Usage Settings'].Values[key] == null || self.ChannelFacets['Channel Usage Settings'].Values[key] == "") {
                            var arr = [];
                            angular.forEach(value.DefaultValue, function (v, k) {
                                arr.push(v)
                            }, arr)
                            self.ChannelFacets['Channel Usage Settings'].Values[key] = arr
                        } else {
                            self.ChannelFacets['Channel Usage Settings'].Values[key] = self.ChannelFacets['Channel Usage Settings'].Values[key].split("|")
                        }
                    }

                )
            })

        })
    }

    //watching for any change in channel id

    $scope.$watch(angular.bind(this, function () {
        return this.rootId;
    }), function (newValue) {
        self.UpdateChannelData(newValue)
    });
    //default view for dashboard is blocked
    self.isBlocked = true;
    channelData.getChannelDashboard(self.rootId).then(function (answer1) {
        self.channelDashboard = answer1.data
    })

    /* topCases.getTopCases().then(function (answer) {
         self.topCases = answer.data
     })*/
    self.label = ["Medium", "Low", "high"];

    self.are_outputs_and_outputs_editable = false;
    //getting input and output list for "input and ouput" view
    channelData.get_input_output_list().then(function (answer) {
            self.all_inputs = answer.data[0].inputs
                //self.iROW_1 = answer.data[0].inputs.slice(0, 3)
                //self.iROW_2 = answer.data[0].inputs.slice(3, 6)
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
    self.PolicyFacets = {}

    /*--------------------  who is using this channel --------------------*/

    self.is_who_screen_editable = false;
    /*--------------------  New Channel --------------------*/

    self.useAsRelay = false;
    self.channel = {};
    channelData.getIcons().then(function (response) {
        self.channelIcons = response.data
        self.ncTypeWidth = (100 / self.channelIcons.length);
    })
    self.isNextButtonDisabled = true;

}])