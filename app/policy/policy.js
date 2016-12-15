app.controller('policy', ["$scope", "$mdSidenav", "policyData", "channelData", "policyUsers", "$state", "$http", "$mdDialog",

    function ($scope, $mdSidenav, policyData, channelData, policyUsers, $state, $http, $mdDialog) {
        var self = this;
        //initiate policy id for API Call
        self.policyId = 8
            //dragMode for policySideNav
        policyData.getSidenav().then(function (answer) {
                self.sideNavList = answer.data
            })
            //initiating the object to send the name to API when creating channel -> only PolicyName is required from server
        self.PolicyInfo = {};
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