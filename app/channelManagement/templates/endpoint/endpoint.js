app.controller("channels", ["channelData", "$scope", "$mdDialog", "$state", "FacetFormatter", "$q", "ToastNotifications", "$stateParams", "Dashboard",
    function (channelData, $scope, $mdDialog, $state, FacetFormatter, $q, ToastNotifications, $stateParams, Dashboard) {

        var self = this;
        self.UsersQuery = {
            "order": "Modified"
        };
        self.FilesQuery = {
            "order": "Total"
        };
        self.TemplateConditions = {};
        //dashboard top files 
        self.GetDashboard = (id, SelectedTime, UserOrder, FilesOrder) => {
            var FileDefered = $q.defer();
            self.FilePromise = FileDefered.promise;
            var UserDefered = $q.defer();
            self.UserPromise = UserDefered.promise;
            if (id && SelectedTime) {
                self.TopFilesQueryInProgress = true;
                getUTCNow = () => {
                    var now = new Date();
                    var time = now.getTime();
                    var offset = now.getTimezoneOffset();
                    offset = offset * 60000;
                    return time - offset;
                }
                var TimeQuery;
                switch (SelectedTime) {
                    case "Last Hour":
                        TimeQuery = getUTCNow() - (3600 * 1000);
                        channelData.GetTopUsers(id, TimeQuery, UserOrder).then((res) => {
                            self.TopUsers = res.data;
                            UserDefered.resolve();
                        }, (error) => {
                            UserDefered.reject();
                        });
                        channelData.GetTopFiles(id, TimeQuery, FilesOrder).then((res) => {
                            self.TopFilesQueryInProgress = false;
                            self.TopFiles = res.data.TopFilesTypeList;
                            FileDefered.resolve();
                        }, (error) => {
                            FileDefered.reject();
                        });
                        break;
                    case "24 Hours":
                        TimeQuery = getUTCNow() - (3600 * 1000 * 24);
                        channelData.GetTopUsers(id, TimeQuery, UserOrder).then((res) => {
                            self.TopUsers = res.data;
                            UserDefered.resolve();
                        }, (error) => {
                            UserDefered.reject();
                        });
                        channelData.GetTopFiles(id, TimeQuery, FilesOrder).then((res) => {
                            self.TopFilesQueryInProgress = false;
                            self.TopFiles = res.data.TopFilesTypeList;
                            FileDefered.resolve();
                        }, (error) => {
                            FileDefered.reject();
                        });
                        break;
                    case "1 Week":
                        TimeQuery = getUTCNow() - (3600 * 1000 * 24 * 7);
                        channelData.GetTopUsers(id, TimeQuery, UserOrder).then((res) => {
                            self.TopUsers = res.data;
                            UserDefered.resolve();
                        }, (error) => {
                            UserDefered.reject();
                        });
                        channelData.GetTopFiles(id, TimeQuery, FilesOrder).then((res) => {
                            self.TopFilesQueryInProgress = false;
                            self.TopFiles = res.data.TopFilesTypeList;
                            FileDefered.resolve();
                        }, (error) => {
                            FileDefered.reject();
                        });
                        break;
                    case "1 Month":
                        TimeQuery = getUTCNow() - (3600 * 1000 * 24 * 30); // might be a pain in the ass when month have 28/31 days ..
                        channelData.GetTopUsers(id, TimeQuery, UserOrder).then((res) => {
                            self.TopUsers = res.data;
                            UserDefered.resolve();
                        }, (error) => {
                            UserDefered.reject();
                        });
                        channelData.GetTopFiles(id, TimeQuery, FilesOrder).then((res) => {
                            self.TopFilesQueryInProgress = false;
                            self.TopFiles = res.data.TopFilesTypeList;
                            FileDefered.resolve();
                        }, (error) => {
                            FileDefered.reject();
                        });
                        break;
                    default:
                        TimeQuery = getUTCNow() - (3600 * 1000);
                        channelData.GetTopUsers(id, TimeQuery, UserOrder).then((res) => {
                            self.TopUsers = res.data;
                            UserDefered.resolve();
                        }, (error) => {
                            UserDefered.reject();
                        });
                        channelData.GetTopFiles(id, TimeQuery, FilesOrder).then((res) => {
                            self.TopFilesQueryInProgress = false;
                            self.TopFiles = res.data.TopFilesTypeList;
                            FileDefered.resolve();
                        }, (error) => {
                            FileDefered.reject();
                        });
                        break;
                };
            };
        };
        self.TemplateSwitcher = function (ChannelType, channelInfo) {
                switch (ChannelType) {
                    // endpoint

                    case 2:
                        self.TemplateConditions.isDirWatcher = false;
                        self.TemplateConditions.isEndpoint = true;
                        self.EndpointSourcesAreEditable = false;
                        self.TemplateConditions.isAPI = false;
                        self.TemplateConditions.isEmail = false;

                        self.InputConfiguration = channelInfo.InputConfiguration || {};
                        self.ismbList = self.InputConfiguration.IoSmbConfiguration || [];
                        self.OutputConfiguration = channelInfo.OutputConfiguration || {};
                        self.osmbList = self.OutputConfiguration.IoSmbConfiguration || [];
                        self.NullStoreName = self.OutputConfiguration.NullStoreName;
                        self.NumberOFiSMBs = self.ismbList.length || 0;
                        self.NumberOFoSMBs = self.osmbList.length || 0;


                        break;

                    case 100:

                        self.TemplateConditions.isDirWatcher = false;
                        self.TemplateConditions.isEndpoint = false;
                        self.EndpointSourcesAreEditable = false;
                        self.TemplateConditions.isAPI = true;
                        self.TemplateConditions.isEmail = false;
                        /*
                        self.InputConfiguration = channelInfo.InputConfiguration || {};
                        self.ismbList = self.InputConfiguration.IoSmbConfiguration || [];
                        self.OutputConfiguration = channelInfo.OutputConfiguration || {};
                        self.osmbList = self.OutputConfiguration.IoSmbConfiguration || [];
                        self.NullStoreName = self.OutputConfiguration.NullStoreName;
                        self.NumberOFiSMBs = self.ismbList.length || 0;
                        self.NumberOFoSMBs = self.osmbList.length || 0;
                        */

                        break;




                    case 1:
                        self.TemplateConditions.isDirWatcher = false;
                        self.TemplateConditions.isEndpoint = true;
                        self.EndpointSourcesAreEditable = false;
                        self.TemplateConditions.isAPI = false;
                        self.TemplateConditions.isEmail = false;

                        self.InputConfiguration = channelInfo.InputConfiguration || {};
                        self.ismbList = self.InputConfiguration.IoSmbConfiguration || [];

                        self.OutputConfiguration = channelInfo.OutputConfiguration || {};
                        self.osmbList = self.OutputConfiguration.IoSmbConfiguration || [];
                        self.NullStoreName = self.OutputConfiguration.NullStoreName;


                        self.NumberOFiSMBs = self.ismbList.length || 0;
                        self.NumberOFoSMBs = self.osmbList.length || 0;

                        break;
                        //case is dirwatcher
                    case 3:

                        self.TemplateConditions.isDirWatcher = true;
                        self.TemplateConditions.isEndpoint = false;
                        self.TemplateConditions.isAPI = false;
                        self.DWSourcesAreEditable = false;
                        self.TemplateConditions.isEmail = false;

                        self.DW.Sources = channelInfo.DirWatcherConfigurations || [];

                        break;

                    case 4:

                        self.TemplateConditions.isDirWatcher = false;
                        self.TemplateConditions.isEndpoint = false;
                        self.TemplateConditions.isAPI = false;
                        self.DWSourcesAreEditable = false;
                        self.TemplateConditions.isEmail = true;
                        self.EmailSettings = channelInfo.EmailSourcesConfiguration;

                        break;

                }
            }
            //__________________DirWatchers ______________________

        self.DW = {
            "Sources": []
        };
        //add an entry to dir watcher sources
        self.CreateNewDirWatcherSourcesEntry = function () {
            self.DW.Sources.push({})
        };
        //remove entry from dirwatcher sources
        self.RemoveDirWatcherSourcesEntry = function (index) {
            self.DW.Sources.splice(index, 1);
        };

        //__________________End of DirWatchers ______________________

        //init the settings table as non editable by default 

        self.AreSettingsEditable = false;

        //dialogs to show for error and success
        self.HTTP_Dialogs = {

                ShowSuccessDialog: function () {
                    ToastNotifications.SuccessToast("Your Changes were successfully saved")
                },
                ShowErrorDialog: function (ErrorMessage) {
                    ToastNotifications.ErrorToast(ErrorMessage)
                }
            }
            /*--------------------  Watching for changes in channel ID --------------------*/

        self.UpdateChannelData = function (newVal) {
            if (newVal) {
                self.ChannelHasFinishedLoading = false;
                self.GetDashboard(newVal, self.DashboardTimeFrame, self.UsersQuery.order, self.FilesQuery.order);
                channelData.get_channel(newVal).then(answer => {
                    var deferred = $q.defer();
                    var $q2 = channelData.ChannelFacets();

                    $q.all({
                        $q2
                    }).then(data => {
                        self.channel_data = answer.data;
                        self.ChannelFacets = (jQuery.isEmptyObject(self.channel_data.ChannelFacets)) ? {} : self.channel_data.ChannelFacets;
                        var ChannelInfo = self.channel_data.ChannelInfo;
                        self.ServerFacetTemplates = {};
                        var AgentType = self.channel_data.AgentType;
                        self.TemplateSwitcher(AgentType, ChannelInfo);
                        self.ChannelConfiguration = ChannelInfo.ChannelConfiguration;
                        self.generalInformations = ChannelInfo.GeneralInformations;
                        self.ServerFacetTemplates = data.$q2.data;
                        self.whoData = FacetFormatter.FormatFacetTemplates(self.ServerFacetTemplates);
                        var facetsVm = FacetFormatter.InitFacets(self.whoData, self.ChannelFacets);
                        deferred.resolve(facetsVm)
                    });
                    return deferred.promise;
                }).then(res => {
                    self.ChannelFacets = res.EntityFacets
                })
                self.ChannelHasFinishedLoading = true;
            }
        }
        $scope.$watch(angular.bind(this, function () {
            return this.rootId;
        }), function (newValue) {
            self.UpdateChannelData(newValue)
        });

        $scope.$watch(angular.bind(this, function () {
            return this.DashboardTimeFrame;
        }), function (time) {
            self.GetDashboard(self.rootId, time, self.UsersQuery.order, self.FilesQuery.order)
        });
        $scope.$watch(angular.bind(this, function () {
            return this.UsersQuery.order;
        }), (UserOrder) => {
            UserOrder = UserOrder.replace("-", "");
            self.GetDashboard(self.rootId, self.DashboardTimeFrame, UserOrder, self.FilesQuery.order);
        });
        $scope.$watch(angular.bind(this, function () {
            return this.FilesQuery.order;
        }), (FilesOrder) => {
            FilesOrder = FilesOrder.replace("-", "");
            self.GetDashboard(self.rootId, self.DashboardTimeFrame, self.UsersQuery.order, FilesOrder);
        });
        //default view for dashboard is blocked
        self.isBlocked = true;
        /*--------------------  Channel Input and Output --------------------*/
        self.are_outputs_and_outputs_editable = false;
        channelData.get_input_output_list().then(function (answer) {
            self.all_inputs = answer.data[0].inputs
            self.is_input_selected = false;
        })

        self.EditNullOption = () => {
            self.NullOptionIsEditable = (self.NullOptionIsEditable) ? false : true;
        };

        self.DataUnits = ["KB", "MB", "GB", "TB"];
        self.FolderPermissions = ["Read", "Write", "Read & Write"]

        self.addISMB = function () {
            var iSMB = {}
            self.ismbList.push(iSMB)
            self.NumberOFiSMBs++;
        }
        self.addOSMB = function () {
            var oSMB = {}
            self.osmbList.push(oSMB);
            self.NumberOFoSMBs++;
        }
        self.deleteISMB = function (ISMB) {
            var index = self.ismbList.indexOf(ISMB)
            self.ismbList.splice(index, 1);
            self.NumberOFiSMBs--;
        }
        self.deleteOSMB = function (OSMB) {
            var index = self.osmbList.indexOf(OSMB)
            self.osmbList.splice(index, 1);
            self.NumberOFoSMBs--;
        }
        self.PolicyFacets = {}

        /*--------------------  who is using this channel --------------------*/

        self.is_who_screen_editable = false;

        self.AddIPToChannel = (IP) => {
            var IpArray = self.ChannelFacets['Channel Usage Settings'].Values["StrPropType_ChannelIpsSelection"];
            var IsValidIp = (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(IP)) ? true : false;
            if (!IpArray.includes(IP) && IsValidIp) {
                IpArray.push(IP);
            } else {
                alert("This IP Adress is not valid or may already be used in this Channel");
            }
        }

        /*--------------------  New Channel --------------------*/

        self.ChannelCreationHasRequiredFields = false;
        self.useAsRelay = false;
        self.channel = {};
        channelData.getIcons().then(function (response) {
            self.channelIcons = response.data
            self.ncTypeWidth = (100 / self.channelIcons.length);
        })

        /*-------------------- Sidebar ----------------------*/

        self.channel_list = []
        self.is_edit_mode_on = false;
        self.LoadSidenav = () => {
            self.sidenavHasLoaded = false;
            channelData.getchannelList().then(function (answer) {
                console.log("loading sidenav")
                self.menuItems = answer.data;
                if (self.menuItems.length > 0) {
                    self.NoChannelExists = false;
                    //retrieving the first ID of the list if not already defined
                    self.rootId = $state.params.id || self.menuItems[0].Id
                    var ChannelType = self.menuItems[0].AgentType;
                    for (i = 0; i < self.menuItems.length; i++) {
                        self.channel_list.push(self.menuItems[i])
                    }
                } else {
                    self.NoChannelExists = true;
                }
                self.sidenavHasLoaded = true;
                console.log(self.channel_list)
                return self.rootId
            }).then((id) => {
                self.UpdateChannelData(id);
            })
        }
        self.LoadSidenav();
        self.onDropComplete = function (index, obj, evt) {
                var otherObj = self.channel_list[index];
                var otherIndex = self.channel_list.indexOf(obj);
                self.channel_list[index] = obj;
                self.channel_list[otherIndex] = otherObj;
            }
            //making channelNm non editable by default
        self.is_channelName_editable = false;
        //delete channel => not refreshing sidenav but refreshing local object instead:)

        self.DeleteChannel = (channelId, channelName) => {
            var confirm = $mdDialog.confirm()
                .title('You are about to delete a channel')
                .textContent('You are about to delete the channel ' + channelName)
                .ariaLabel('delete channel')
                .ok('Yes, delete this channel')
                .cancel('Cancel deletion');
            $mdDialog.show(confirm).then(() => {
                channelData.delete_channel(channelId).then(result => {
                    console.log("successfully deleted channel : ", channelId)
                    var MatchingChannel = _.find(self.channel_list, function (channel) {
                        return channel.Id == channelId;
                    });
                    var ChannelIndex = self.channel_list.indexOf(MatchingChannel);
                    self.channel_list.splice(ChannelIndex, 1);
                    self.rootId = self.channel_list[0].Id;
                    console.log(self.channel_list);

                }, error => {
                    self.HTTP_Dialogs.ShowErrorDialog("We could not delete this channel", error.data.Message);
                })
            })
        };
        self.GetChannelGeneralInfo = (ChannelId) => {
            var MatchingChannel = _.find(self.channel_list, (channel) => {
                return channel.Id == ChannelId
            });
            var ChannelIndex = self.channel_list.indexOf(MatchingChannel);
            var ChannelName = self.channel_list[ChannelIndex].ChannelInfo.GeneralInformations.Name;
            var ChannelDescription = self.channel_list[ChannelIndex].ChannelInfo.GeneralInformations.Description || "No Description Has Been Set for this Channel";
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title(ChannelName)
                .textContent(ChannelDescription)
                .ariaLabel('Alert Dialog Demo')
                .ok('OK')
            );

        }

        /*-------------------- Formatting facets before POST ----------------------*/

        self.FormatChannelFacetsBeforePOST = function () {
            var Facets2POST = FacetFormatter.FormatForPOST(self, "ChannelFacets", "ServerFacetTemplates");
            return Facets2POST;
        };

        self.ToBoolean = function (value) {
            var bool;
            for (i in value) {
                bool = value[i] === "True";
            }
            return bool
        };
    }
])


app.filter("ReturnPolicyName", () => {
    return (Policy, DefaultKey) => {
        for (i in Policy) {
            if (Policy[i].Key === DefaultKey) {
                return Policy[i].Value;
            }
        }
    }
})