app.controller('policy', ["$scope", "$mdSidenav", "policyData", "channelData", "policyChannels", "policyUsers", "$state", "$http", "$mdDialog",

    function ($scope, $mdSidenav, policyData, channelData, policyChannels, policyUsers, $state, $http, $mdDialog) {
        var self = this;
        //initiate policy id for API Call
        self.policyId = 7
            //dragMode for policySideNav
        self.draggableObjects = [];
        policyData.getSidenav().then(function (answer) {
                self.sideNavList = answer.data
                for (i in self.sideNavList) {
                    self.draggableObjects.push(self.sideNavList[i])
                }
            })
            //initiating the object to send the name to API when creating channel -> only PolicyName is required from server
        self.PolicyInfo = {};
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
        self.get_policy_data = function (id) {
                policyData.getDashboard(id).then(function (answer) {
                    self.dashboardData = answer.data;
                })
            }
            //filetypes
            //getting filetypes
            //initiate the channel ids to send
        self.channelIds = [];
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
        policyData.get_groups().then(function (answer) {
            self.groups = answer.data
        })
        policyData.get_policy_channels(self.policyId).then(function (answer) {
            self.available_channels = answer.data.AvailableChannels
            self.current_channels = answer.data.CurrentChannels
        });
        // setting the toggling mode for editing groups
        self.are_groups_editable = false
            //setting the toggling mode for editing users
        self.are_users_editable = false
            //making channels draggable 
        self.current_channels = []
            //assign a channel
            //available channel successfully dumped insinde current channels

        self.drop_success_current_channels = function (data, event) {
                var channel_index = self.current_channels.indexOf(data)
                var old_index = self.available_channels.indexOf(data)
                if (channel_index == -1) {
                    self.current_channels.push(data)
                }
                if (old_index > -1) {
                    self.available_channels.splice(old_index, 1)
                }
            }
            //successfully removed channel from current channel

        self.remove_current_channel = function (data, event) {
                var channel_index = self.current_channels.indexOf(data)
                if (channel_index > -1) {
                    self.current_channels.splice(channel_index, 1)
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
        policyData.get_policy_info(self.policyId).then(function (answer) {
                self.policy_general_info = answer.data
                self.detection = self.policy_general_info.PolicyInfo.FileDetectionConfigurations
                self.types = self.policy_general_info.PolicyInfo.FileTypesConfigurations
            })
            //who > computers -> retrieving data from relevant service ( channelData )
        policyData.get_computers_list().then(function (answer) {
                self.all_computers = answer.data;
            })
            //making active directory computers section disabled by default
        self.are_all_computers_editable = false
        self.are_current_computers_editable = false
        policyData.get_policy_computers().then(function (answer) {
            self.policy_computers = answer.data
        })
        self.getPolicyId = function (id) {
            self.policyId = id
        }

        //settings //

        //regex validator for input for file size //

        self.allFacets = {};
        policyData.get_policy_settings().then(function (answer) {
            var data = answer.data;
            var types = []
                // self.allFacets = 
                //   console.log(self.allFacets);
            var log = [];
            angular.forEach(data, function (value, key) {
                var newProps = {};
                angular.forEach(value.Properties, function (props, propkey) {
                    props["isTreeType"] = props["AdditionalInfo"] != null;
                    if (props["isTreeType"] == true) {
                        props["AvailableValues"] = props["AdditionalInfo"] != null ? props["AdditionalInfo"].split('|') : null;
                        var files = []
                        angular.forEach(props["AvailableValues"], function (file_value, file_key) {
                            if (file_value.indexOf(':') !== -1) {
                                this.push(file_value.split(":")[3])
                            } else {
                                this.push(file_value)
                            }
                        }, files)
                        props["tree_values"] = files;
                    } else {
                        props["AvailableValues"] = props["AllowedValues"] != null ? props["AllowedValues"].split('|') : null;
                    }
                    //props["isTreeType"] = props["AddionalInfo"] != null;
                    props["DefaultValue"] = props["Type"].includes("FacetPropertyType_MultiChoice") ? props["DefaultValue"].split('|') : props["DefaultValue"];
                    newProps[propkey] = props;
                    types.push({
                        "name": props["Type"]
                    })
                }, newProps);
                value.Properties = newProps;
                this[key] = value;
            }, self.allFacets);
        });

        self.open_second_modal = function (ev, propValue, key, propkey) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: "app/policy/templates/policyDefinition/templates/settings/tree_values/tree_values.html",
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: true,
                    locals: {
                        propValue: propValue,
                        key: key,
                        propkey: propkey
                    }
                })
                /*
                when we open the dialog, we store all the element inside an object that sits on the $scope of the dialog ($scope.policyFacets)
                then when we close the dialog : we re-inject the extensions oject where it belongs using it's key and propkey
                it knows key and propkey because we inject them inside the HTML when passing the function

                questions : 
                1) why to inject propValue inside the DialogController?
                2) how does the .then works? -> how is the onSave() is connected to the .then function()? onSave only console.log() and hide() the dialog
                how does this controller(policy) then knows policyFacets extensions? without onSave func it does not.
                */
                .then(function (success) {
                    self.PolicyFacets[key].Values[propkey] = success
                }, function (cancel) {
                    console.log("cancel")
                    console.log(cancel)
                })
        }
    }
])

// file extensions dialog controller
function DialogController($scope, $mdDialog, propValue) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.propValue = propValue;

    $scope.policyFacets = {}

    $scope.onSave = function (answer) {
        console.log(answer)
            //$mdDialog.hide() resolves the promise and $mdDialog.cancel() rejects it 
        $mdDialog.hide(answer);
    };

}