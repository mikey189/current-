app.controller("channels", ["C2CData", "channelData", "$scope", function (C2CData, channelData, $scope) {

    var self = this;
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];

    /*-------------------- Sidebar ----------------------*/

    self.RefreshView = function (id) {
        console.log("refreshing view..")
            //self.UpdateChannelData(id)
        $scope.$apply()
    }

  
    

    self.UpdateSettings = function () {
        var settings_table = $(".channel-settings-table")
        if (!self.are_settings_editable) {
            settings_table.removeClass("notEditable")
            self.are_settings_editable = true
        } else {
            //MAKE API CALL TO SEND DATA 
            settings_table.addClass("notEditable")

            channelData.post_channel_settings(self.rootId, self.ChannelConfiguration).then(function (success) {
                //location.reload(true)
                self.ChannelConfiguration = success.data.ChannelInfo.ChannelConfiguration
            }, function (error) {
                alert("error : " + error.data.Message)
            })

            self.are_settings_editable = false

        }
    }

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

    /*--------------------  Watching for changes in channel ID --------------------*/

    self.UpdateChannelData = function (newVal) {

            channelData.get_channel(newVal).then(function (answer) {
                self.channel_data = answer.data
                var ChannelFacetsIfNull = {
                    "Channel Usage Settings": {
                        "Values": {}
                    }
                }

                var channelInfo = answer.data.ChannelInfo
                self.ChannelConfiguration = channelInfo.ChannelConfiguration
                console.log(self.ChannelConfiguration)
                self.generalInformations = channelInfo.GeneralInformations

                self.InputConfiguration = (channelInfo.InputConfiguration == null) ? {} : channelInfo.InputConfiguration
                self.ismbList = (self.InputConfiguration.IoSmbConfiguration == null) ? [] : self.InputConfiguration.IoSmbConfiguration
                self.OutputConfiguration = (channelInfo.OutputConfiguration == null) ? {} : channelInfo.OutputConfiguration
                self.osmbList = (self.OutputConfiguration.IoSmbConfiguration == null) ? [] : self.OutputConfiguration.IoSmbConfiguration
                self.ChannelFacets = (self.channel_data.ChannelFacets.hasOwnProperty("Channel Usage Settings")) ? self.channel_data.ChannelFacets : ChannelFacetsIfNull;

                channelData.whoIsUsing().then(function (answer) {
                    self.whoData = answer.data
                    angular.forEach(self.whoData['Channel Usage Settings'].Properties, function (value, key) {
                            if (self.ChannelFacets['Channel Usage Settings'].Values[key] == undefined || self.ChannelFacets['Channel Usage Settings'].Values[key] == "") {
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
        //Actual $watch function
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

    /*--------------------  Channel Input and Output --------------------*/

    self.are_outputs_and_outputs_editable = false;
    channelData.get_input_output_list().then(function (answer) {
        self.all_inputs = answer.data[0].inputs
        self.is_input_selected = false;
    })

    self.DataUnits = ["KB", "MB", "GB", "TB"]
    self.FolderPermissions = ["Read", "Write", "Read & Write"]

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