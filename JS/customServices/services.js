app.factory("Dashboard", ($http) => {

    var url = "app/dashboard/DummyData.json";
    var NewsURl  = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=aeaf2ce8b9984429bbe0d8ea1a0a92fc";
    return{
        GetDummyData: () => {
            return $http.get(url)
        }, 
        GetFeed: () => {
            return $http.get(NewsURl)
        },
        GetFeedImage:(ImageURL) => {
            return $http.get(ImageURL)
        }
    }

})
app.factory("401Error", ($q, $injector) => {
    return {
        responseError: function (rejection) {
            if (rejection.status === 401) {
                var $mdDialog = $injector.get("$mdDialog");
                var $state = $injector.get("$state");
                var $window = $injector.get("$window");
                localStorage.removeItem("token");
                var $timeout = $injector.get("$timeout");
                var alert = $mdDialog.alert()
                    .title('Session Expired')
                    .textContent('Your session has expired, please log back in')
                    .ariaLabel('expired session')
                    .ok('Log Back in')
                $mdDialog.show(alert)
                    .then(() => {
                        $state.go('login', {}, {
                            reload: true
                        }).then(function () {
                            $window.location.reload(true);
                        });
                    })
            }
            return $q.reject(rejection)
        }
    }
});
app.factory("HTTPHeaders", function ($http, $state, $timeout) {
    var token = localStorage.getItem("token")

    return {
        DeleteTokenFromHeader: function () {
            $http.defaults.headers.common.Authorization = "";
        }

    }
})
app.factory("authService", ["$rootScope", "$http", function ($rootScope, $http) {

    return {
        checkLogin: function (serverName, username, password) {
            // var url = "http://" + sname + ":4580/api/users/login";
            //not setting the url before hand and using localstorage to get serverName because it causes a delay and mutliple 
            //refresh are needed to get the serverName to erase the localSotrage first 

            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: "http://" + serverName + ":4580/api/users/login",
                method: "POST",
                data: {
                    UserName: username,
                    Password: password
                }
            })
        }
    }
}]);
app.factory("MainDashboard", ($http) => {
    var sname = localStorage.getItem("serverName");
    var url = "http://" + sname + ":4580/api/general/dashboard";
    return {
        GetDashboard: () => {
            return $http.get(url);
        }
    }
})
//http: jdev01:4580/api/channels/GetChannelSettingsFacets?section=ChannelUsage
app.factory("channelData", function ($http, $rootScope) {

    var sname = localStorage.getItem("serverName");

    var get_channel = "http://" + sname + ":4580/api/Channels/getchannel/"
    var input_output_list = "http://" + sname + ":4580/api/jsonserver/input_output_list";
    var computerList = "http://" + sname + ":4580/api/users/getadmachines";
    var channelsIconsURL = "http://" + sname + ":4580/api/jsonserver/channelsIcons";
    var channelList = "http://" + sname + ":4580/api/channels/getallchannels/?q=1"
    var channelListReal = "http://" + sname + ":4580/api/channels/getALLCHANNELS";
    var ChannelTopUsers = "http://" + sname + ":4580/api/channels/GetChannelDashboardTopUsers/";
    var ChannelTopFiles = "http://" + sname + ":4580/api/channels/ChannelDashboardTopFiles/";
    var postChannel = "http://" + sname + ":4580/api/Channels/PostChannel";
    var updateComputers = "http://" + sname + ":4580/api/channels/PostChannelComputerList/";
    var current_computers = "http://" + sname + ":4580/api/Channels/getchannel/"
    var update_inputs_outputs = "http://" + sname + ":4580/api/channels/PostChannelIoConfiguration/"
    var channel_informations = "http://" + sname + ":4580/api/channels/"
    var channelTypes = "http://" + sname + ":4580/api/deployment/getDeployments"
    var channelSettings = "http://" + sname + ":4580/api/channels/PostChannelSettings?id="
    var delete_channel = "http://" + sname + ":4580/api/Channels/DeleteChannel/"
    var policyList = "http://" + sname + ":4580/api/policy/getallpolicies/?q=1";
    var reorderChannelOrder = "http://" + sname + ":4580/api/Channels/ReorderChannelPriority"
    var updateChannelName = "http://" + sname + ":4580/api/channels/UpdateChannelName?"
    var ChannelFacets = "http://" + sname + ":4580/api/channels/GetChannelSettingsFacets?section=ChannelUsage"
    var updateWhoIsUsing = "http://" + sname + ":4580/api/channels/postChannelUsageSettings/"

    return {
        getchannelList: function () {
            return $http.get(channelList, {
                cache: false
            })
        },
        addChannel: function (data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                method: "POST",
                data: data
            })
        },
        getChannel: function () {
            return $http.get(url)
        },
        getIcons: function () {
            return $http.get(channelsIconsURL)
        },
        get_input_output_list: function () {
            return $http.get(input_output_list)
        },
        getDashboard: function () {
            return $http.get(dashboard)
        },
        getRelayList: function () {
            return $http.get(relayList)
        },
        getComputerList: function () {
            return $http.get(computerList)
        },
        getAllChannels: function () {
            return $http.get(channelListReal)
        },
        GetTopUsers: function (id, TimeReference, order) {
            return $http.get(ChannelTopUsers + id + "?startTimeInTicks=" + TimeReference+"&sortField="+order)
        },
        GetTopFiles: function (id, TimeReference, order) {
            return $http.get(ChannelTopFiles + id + "?startTimeInTicks=" + TimeReference+"&sortField="+order)
        },
        /*
        Missing call
        GetTopFiles: function (id, TimeReference, order) {
            return $http.get(ChannelTopFiles + id + "?startTimeInTicks=" + TimeReference+"sortField="+order)
        },*/
        createChannel: function (data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: postChannel,
                method: "POST",
                data: data
            })
        },
        update_computer_list: function (id, data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: updateComputers + id,
                method: "POST",
                data: data
            })
        },
        get_current_computers: function (id) {
            return $http.get(current_computers + id)
        },
        update_inputs_outputs: function (id, data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: update_inputs_outputs + id,
                method: "POST",
                data: data
            })
        },
        getChannelTypes: function (id) {
            return $http.get(channelTypes + id)
        },
        post_channel_settings: function (id, data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: channelSettings + id,
                method: "POST",
                data: data
            })
        },
        get_channel: function (id) {
            return $http.get(get_channel + id, {
                cache: false
            })
        },
        delete_channel: function (id) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: delete_channel + id,
                method: "DELETE"
            })
        },
        get_channel_groups: function () {
            return $http.get(channel_groups)
        },
        get_current_channel_groups: function () {
            return $http.get(current_channel_groups)
        },
        get_all_ips: function () {
            return $http.get(all_ips)
        },
        get_current_ips: function () {
            return $http.get(current_ips)
        },
        get_all_users: function () {
            return $http.get(all_users)
        },
        get_current_users: function () {
            return $http.get(current_users)
        },
        get_all_computers: function () {
            return $http.get(all_computers)
        },
        get_current_computers: function () {
            return $http.get(current_computers)
        },
        get_policy_list: function () {
            return $http.get(policyList, {
                cache: false
            })
        },
        reorder_channel_priority: function (policyOrder) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: reorderChannelOrder,
                method: "POST",
                data: policyOrder
            })
        },
        updateChannelName: function (id, name) {
            return $http({
                headers: {
                    "Content-Type": "application/json"
                },
                url: updateChannelName + "channelId=" + id + "&channelName=" + name,
                method: "POST"
            })
        },
        ChannelFacets: function () {
            return $http.get(ChannelFacets)
        },
        updateWhoIsUsing: function (id, data) {
            return $http({
                headers: {
                    "Content-Type": "application/json"
                },
                url: updateWhoIsUsing + id,
                data: data,
                method: "POST"
            })
        }

    }
})
app.factory("policyData", function ($rootScope, $http) {


    var sname = localStorage.getItem("serverName");

    var policyList = "http://" + sname + ":4580/api/policy/getallpolicies/?q=1";
    var new_policy_creation = "http://" + sname + ":4580/api/policy/postPolicy";
    var policyOrder = "http://" + sname + ":4580/api/policy/reorderPolicyPriority";
    var deletePolicy = "http://" + sname + ":4580/api/policy/deletepolicy";
    var policySidenav = "http://" + sname + ":4580/api/policy/GetPoliciesSideNav"
    var policyDashboard = "http://" + sname + ":4580/api/policy/GetPolicyDashboardInfo/";
    var filetype = "http://" + sname + ":4580/api/general/filetypes";
    var postFiletype = "http://" + sname + ":4580/api/policy/PostPolicyFileTypes/";
    var fireEye_servers = "http://" + sname + ":4580/api/jsonserver/fireEye_servers"
    var cukoo_servers = "http://" + sname + ":4580/api/jsonserver/cukoo_servers"
    var policyChannels = "http://" + sname + ":4580/api/policy/GetPolicyChannels/"
    var update_current_channels = "http://" + sname + ":4580/api/policy/PostUpdatePolicyChannels/"
    var update_groups = "http://" + sname + ":4580/api/policy/PostPolicyUsersAndGroups/"
    var available_groups = "http://" + sname + ":4580/api/users/getadusergroups"
    var policy_name = "http://" + sname + ":4580/api/policy/updatepolicyname?"
    var policy_detection = "http://" + sname + ":4580/api/policy/PostPolicyFileDetection/"
    var policy_info = "http://" + sname + ":4580/api/policy/getpolicy/"

    var policy_settings = "http://" + sname + ":4580/api/policy/GetSettingsFacets?section=";
    var post_policy_settings = "http://" + sname + ":4580/api/Policy/PostPolicySettings/";
    var cdrFacetsTemplate = "http://" + sname + ":4580/api/policy/GetSettingsFacets?section=PolicyCdrSettings"

    var FiletypeFacets = "http://localhost:3000/PolicyFileTypesSettings"


    return {
        create_new_policy: function (data) {
            return $http({

                headers: {
                    'Content-Type': 'application/json'
                },
                url: new_policy_creation,
                method: "POST",
                data: data
            })
        },
        GetFiletypeFacets: function () {
            return $http.get(FiletypeFacets)
        },
        getList: function () {
            return $http.get(policyList, {
                cache: false
            });
        },
        getSidenav: function () {
            return $http.get(policySidenav, {
                cache: false
            })
        },
        getTopFiles: function () {
            return $http.get(topFiles)
        },
        getTopUsers: function () {
            return $http.get(topUsers)
        },
        postOrder: function (order) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: policyOrder,
                method: "POST",
                data: order
            })
        },
        deletePolicy: function (id) {
            if (id != 0) {
                return $http({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: deletePolicy + "/" + id,
                    method: "POST",
                    data: id
                })
            }
        },
        addData: function (data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: policyDefinition,
                method: "POST",
                data: data
            })
        },
        getData: function () {
            return $http.get(policyDefinition).then(function (response) {
                return response.data
            })
        },
        getDashboard: function (id, TimeReference) {
            return $http.get(policyDashboard + id + "?startTimeInTicks=" + TimeReference)
        },
        getDescriptions: function () {
            return $http.get(fileExtensionsDescription).then(function (response) {
                return response.data
            })
        },
        getFiletypes: function () {
            return $http.get(filetype)
        },
        postFiletype: function (id, FileType) {


            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: (postFiletype + id),
                method: "POST",
                data: FileType
            })
        },
        get_fireEye_servers: function () {
            return $http.get(fireEye_servers)
        },
        get_cukoo_servers: function () {
            return $http.get(cukoo_servers)
        },
        get_policy_channels: function (id) {
            return $http.get(policyChannels + id)
        },
        update_current_channels: function (id, channelIds) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: update_current_channels + id,
                method: "POST",
                data: channelIds
            })
        },
        update_groups: function (id, groups) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: update_groups + id,
                method: "POST",
                data: {
                    selectedGroups: groups
                }
            })
        },
        update_users: function (id, users) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: update_groups + id,
                method: "POST",
                data: {
                    selectedUsers: users
                }
            })
        },
        get_groups: function () {
            return $http.get(available_groups)
        },
        update_policy_name: function (id, name) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: policy_name + "policyId=" + id + "&policyName=" + name,
                method: "POST"
            })
        },
        update_policy_detection: function (id, data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: policy_detection + id,
                method: "POST",
                data: data
            })
        },
        get_policy_info: function (id) {
            return $http.get(policy_info + id, {
                cache: false
            })
        },
        get_computers_list: function () {
            return $http.get(computers_list)
        },
        get_policy_computers: function () {
            return $http.get(policy_computers)
        },
        get_policy_settings: function (section) {
            return $http.get(policy_settings + section);
        },
        post_policy_settings: function (id, data) {

            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: post_policy_settings + id,
                method: "POST",
                data: data
            });
        },
        getCDRFacets: function () {
            return $http.get(cdrFacetsTemplate, {
                cache: false
            })
        }


    }
})
app.factory("reports_factory", function ($http) {
    var sname = localStorage.getItem("serverName");

    var menu = "http://" + sname + ":4580/api/jsonserver/reports?q=reports_menu"
    return {
        get_menu: function () {
            return $http.get(menu)
        }
    }
})
app.factory("sanitization_factory", function ($http) {

    var sname = localStorage.getItem("serverName");

    var url = "http://" + sname + ":4580/api/report/GetSanitizations/?q=1";
    var filter_field = "http://" + sname + ":4580/api/jsonserver/sanitizations?q=sanitization_filter_fields";
    var details = "http://" + sname + ":4580/api/report/GetSanitizationInformation/";
    var available_actions = "http://" + sname + ":4580/api/report/GetSanitizationWorkflowAction/";
    var performActionUrl = "http://" + sname + ":4580/api/report/PostPerformSanitizationWorkflowAction/";

    return {

        get_actions: (id) => {
            return $http.get(available_actions + id)
        },

        perform_action: (id, action) => {
            return $http({
                url: performActionUrl + id,
                method: 'POST',
                cache: false,
                params: {
                    "sanitizationWorkflowAction": action
                }
            })
        },
        get_data: (index, size, order_field) => {
            return $http.get(url + "PageIndex=" + index + "&PageSize=" + size + "&SortField=" + order_field)
        },
        get_filter_fields: () => {
            return $http.get(filter_field)
        },

        FilterOrder: (Field, Order) => {
            return $http.get(url + "&SortField=" + Field + "&SortOrder=" + Order)
        },

        get_filter_results: (filter_query) => {
            return $http({
                url: url,
                method: 'GET',
                cache: false,
                params: filter_query
            })
        },
        get_details: (id) => {
            return $http.get(details + id)
        }
    }
});
app.factory("system_properties", function ($http) {

    var sname = localStorage.getItem("serverName");
    var propertiesList = "http://" + sname + ":4580/api/SystemProperties/GetSystemProperties";
    var UpdateSettings = "http://" + sname + ":4580/api/SystemProperties/PostSystemProperties";
    var searchUsers = "http://" + sname + ":4580/api/users/getadusergroups?";
    return {
        UpdateSettings: function (props) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: UpdateSettings,
                method: "POST",
                data: props
            });
        },
        getusers: (user) => {
            return $http.get(searchUsers+"user="+user)
        },
        get_properties: function () {
            return $http.get(propertiesList, {cache: true});

        }
    }
});
app.factory("telerik_reports_factory", function ($http) {
    var sname = localStorage.getItem("serverName");

    var reportsList = "http://" + sname + ":4580/api/report/GetAvailableReports";

    return {
        get_report_info: function () {
            return $http.get(reportsList);
        }
    }
});
app.factory("system_events_factory", function ($http) {

    var sname = localStorage.getItem("serverName");

    var base_url = "http://" + sname + ":4580/api/Report/GetSystemNotifications/?q=1"
    return {
        get_system_events: function (index, size) {
            return $http.get(base_url + "PageIndex=" + index + "&PageSize=" + size)
        },
        get_filter_results: function (filter_query) {
            return $http({
                url: base_url,
                method: 'GET',
                params: filter_query
            })
        },
        FilterOrder: (Field, Order) => {
            return $http.get(base_url + "&SortField=" + Field + "&SortOrder=" + Order);
        }
    }
});

app.factory("jobs_factory", function ($http) {

    var sname = localStorage.getItem("serverName");

    var base_url = "http://" + sname + ":4580/api/report/GetSanitizationJobs/?q=1&AgentTypeStr=endpoint";
    return {
        get_jobs: function (filter_query) {
            return $http({
                url: base_url,
                method: 'GET',
                params: filter_query
            })
        }
    }
});

app.factory("emails_factory", function ($http) {

    var sname = localStorage.getItem("serverName");

    var base_url = "http://" + sname + ":4580/api/report/GetEmailSanitizations/?q=1"

    return {
        get_emails: function (filter_query) {
            return $http({
                url: base_url,
                method: 'GET',
                params: filter_query
            })
        },
        FilterOrder: (Field, Order) => {
            return $http.get(base_url + "&SortField=" + Field + "&SortOrder=" + Order);
        }
    }
});

app.factory("scanners_factory", function ($http) {

    var sname = localStorage.getItem("serverName");
    var base_url = "http://" + sname + ":4580/api/scanners/"
    return {
        get_scanners_status: function (numOfScanners) {
            var addedUrl = (!isNaN(numOfScanners)) ? "?numberOfScanners=" + numOfScanners : "";
            return $http.get(base_url + "Getscannersstatus" + addedUrl)
        },
        get_scanners_offline_updates_status: function () {
            return $http.get(base_url + "GetScannerOfflineUpdateStatus");
        },
        post_scanners_collect_updates: function () {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: base_url + "PostScannerCollectUpdates",
                method: "POST"
            });
        },
        post_scanners_apply_updates: function () {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: base_url + "PostScannerApplyUpdates",
                method: "POST"
            });
        }
    }
});

app.factory("notification_types", function ($http) {
    var sname = localStorage.getItem("serverName");

    var url = "http://" + sname + ":4580/api/general/GetNotificationTypes"
    return {
        get_notifications_types: function () {
            return $http.get(url)
        }
    }
})

app.factory("computer_list", function ($http) {
    var sname = localStorage.getItem("serverName");

    var url = "http://" + sname + ":4580/api/users/getadmachines"
    return {
        get_computers: function () {
            return $http.get(url)
        }
    }
});

app.factory("active_users", function ($http) {
    var sname = localStorage.getItem("serverName");

    var url = "http://" + sname + ":4580/api/users/getadusers"
    return {
        get_users: function () {
            return $http.get(url)
        }
    }
});

app.factory("active_agents", function ($http) {
    var sname = localStorage.getItem("serverName");

    var url = "http://" + sname + ":4580/api/Deployment/GetDeployments/"
    return {
        get_agents: function () {
            return $http.get(url)
        }
    }
});

app.factory("sanitization_status", function ($http) {
    var sname = localStorage.getItem("serverName");

    var url = "http://" + sname + ":4580/api/general/GetSanitizationStatusesList"
    return {
        get_status_list: function () {
            return $http.get(url)
        }
    }
});

app.factory("$cluster", function ($http) {

    var sname = localStorage.getItem("serverName")

    var ClusterData = "http://" + sname + ":4580/api/Cluster/GetClusterTopology?";

    return {
        GetClusterData: function (StartTime, EndTime) {
            //we use post to get the data beause it takes a long time
            return $http.get(ClusterData + "sdate=" + StartTime + "&edate=" + EndTime)

        }
    }
});

app.factory("accountMgmt_factory", function ($http) {

    var sname = localStorage.getItem("serverName")

    return {
        PostForgotPassword: function (username, server) {
            var postSaasForgotPasswordUrl = "http://" + server + ":4580/api/manage/PostSaasForgotPassword?";
            //we use post to get the data beause it takes a long time

            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: postSaasForgotPasswordUrl + "username=" + username,
                method: "POST"
            });
        },
        PostResetPassword: function (newPassword, token, server) {
            var postSaasResetPasswordUrl = server + "/api/manage/PostSaasResetPassword";
            //we use post to get the data beause it takes a long time
            var forgotPwdParams = {
                "newPassword": newPassword,
                "token": token
            };
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: postSaasResetPasswordUrl,
                method: "POST",
                params: forgotPwdParams
            });
        }
    }
});