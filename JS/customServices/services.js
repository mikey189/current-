app.factory("authService", ["$rootScope", "$http", function ($rootScope, $http) {

    var sname = localStorage.getItem("serverName");
    //var snme = serverName !== null ? sname: "jdevO1"

    return {
        checkLogin: function (username, password) {
            console.log("service says " +sname)
            var url = "http://"+sname+":4580/api/users/login";

            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                method: "POST",
                data: {
                    username: username,
                    password: password
                }
            })
        }
    }
}])

app.factory("groupList", function ($http) {


    var url = "http://localhost:3000/groupList";
    return {
        getGroups: function () {
            return $http.get(url)
        }
    }
})

app.factory("channelData", function ($http, $rootScope) {

    var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname
 

    var url = "http://localhost:3000/channels";
    var inputURL = "http://localhost:3000/inputList";
    var input_output_list = "http://localhost:3000/input_output_list";
    var dashboard = "http://localhost:3000/dashboard";
    var relayList = "http://localhost:3000/relayList";
    var computerList = "http://"+sname+":4580/api/users/getadmachines";
    var channelsIconsURL = "http://localhost:3000/channelsIcons";
    var channelList = "http://"+sname+":4580/api/channels/getallchannels/"
        //var channelList = "http://localhost:3000/channelList";
    var channelListReal = "http://"+sname+":4580/api/channels/getALLCHANNELS";
    var channelDashboard = "http://"+sname+":4580/api/channels/getchanneldashboard/";
    var postChannel = "http://"+sname+":4580/api/Channels/PostChannel";
    var updateComputers = "http://"+sname+":4580/api/channels/PostChannelComputerList/";
    var current_computers = "http://"+sname+":4580/api/Channels/getchannel/"
    var update_inputs_outputs = "http://"+sname+":4580/api/channels/PostChannelIoConfiguration/"
    var channel_informations = "http://"+sname+":4580/api/channels/"
    var channelTypes = "http://"+sname+":4580/api/deployment/getDeployments"

    return {
        getchannelList: function () {
            return $http.get(channelList)
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
        getChannelDashboard: function (id) {
            return $http.get(channelDashboard + id)
        },
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
            return $http.get(channelTypes+id)
        }

    }
})

app.factory("topCases", function ($http) {
    var url = "  http://localhost:3000/topUsers";
    return {
        getTopCases: function () {
            return $http.get(url)
        }
    }
})

app.factory("policyData", function ($rootScope, $http) {


    var sname = localStorage.getItem("serverName");
   // var sname = serverName == null ? "jdev01": sname

    var policyList = "http://"+sname+":4580/api/policy/getallpolicies";
    var new_policy_creation = "http://"+sname+":4580/api/policy/postPolicy";
    //http://localhost:3000/policyList
    var policyOrder = "http://"+sname+":4580/api/policy/reorderPolicyPriority";
    //"http://localhost:3000/policyOrder"
    var deletePolicy = "http://"+sname + ":4580/api/policy/deletepolicy";
    var policySidenav = "http://"+sname+":4580/api/policy/GetPoliciesSideNav"
    var topFiles = "http://localhost:3000/PDTopFiles";
    var topUsers = "http://localhost:3000/PDTopUsers";
    var policyDefinition = "http://localhost:3000/policyDefinition";
    var fileExtensionsDescription = "http://localhost:3000/policyDescriptionToolip";
    var policyDashboard = "http://"+sname+":4580/api/policy/GetPolicyDashboardInfo/";
    var filetype = "http://"+sname+":4580/api/general/filetypes";
    var postFiletype = "http://"+sname+":4580/api/policy/PostPolicyFileTypes/";
    var fireEye_servers = "http://localhost:3000/fireEye_servers"
    var cukoo_servers = "http://localhost:3000/cukoo_servers"
    var policyChannels = "http://"+sname+":4580/api/policy/GetPolicyChannels/"
    var update_current_channels = "http://"+sname+":4580/api/policy/PostUpdatePolicyChannels/"
    var update_groups = "http://"+sname+":4580/api/policy/PostPolicyUsersAndGroups/"
    var available_groups = "http://"+sname+":4580/api/users/getadusergroups"
    var policy_name = "http://"+sname+":4580/api/policy/updatepolicyname?"
    var policy_detection = "http://"+sname+":4580/api/policy/PostPolicyFileDetection/"
    var policy_info = "http://"+sname+":4580/api/policy/getpolicy/"

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
        getList: function () {
            return $http.get(policyList);
        },
        getSidenav: function () {
            return $http.get(policySidenav)
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
        getDashboard: function (id) {
            return $http.get(policyDashboard + id)
        },
        getDescriptions() {
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
                url: postFiletype + id,
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
        get_policy_channels: function(id) {
            return $http.get(policyChannels+id)
        },
        update_current_channels: function(id, channelIds){
           return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: update_current_channels+id,
                method: "POST",
                data: channelIds
            }) 
        },
        update_groups: function(id, groups){
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: update_groups+id,
                method: "POST",
                data: {selectedGroups: groups}
            }) 
        },
        update_users: function(id, users){
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: update_groups+id,
                method: "POST",
                data: {selectedUsers: users}
            }) 
        },
        get_groups: function(){
            return $http.get(available_groups)
        },
         update_policy_name: function(id, name){
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: policy_name+"policyId="+id+"&policyName="+name,
                method: "POST"
            }) 
        },
        update_policy_detection: function(id, data){
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: policy_detection+id,
                method: "POST",
                data: data
            }) 
        },
        get_policy_info: function(id){
            return $http.get(policy_info+id)
        }

    }
})

app.factory("dashboardData", function ($http) {
    var inputURL = "http://localhost:3000/dashboardInputs";
    var totalInputURL = "http://localhost:3000/dashboardTotalInputs";
    var outputURL = "http://localhost:3000/dashboardOutputs";
    var casesSidebar = "http://localhost:3000/dashboardSidebar";

    return {
        getInput: function () {
            return $http.get(inputURL)
        },
        getTotalInput: function () {
            return $http.get(totalInputURL)
        },
        getOutput: function () {
            return $http.get(outputURL)
        },
        getCasesSidebar: function () {
            return $http.get(casesSidebar)
        }
    }
})


app.factory("users", function ($http) {
    var url = "http://localhost:3000/activeUsers";
    return {
        getUsers: function () {
            return $http.get(url).then(function (answer) {
                return answer.data;
            })
        }
    }
})

app.factory("policyUsers", function ($http) {
    var url = "http://localhost:3000/policyUsers";
    return {
        getData: function () {
            return $http.get(url)
        }
    }
})

app.factory("filetype", function ($http) {
  var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var url = "http://"+sname+":4580/api/general/filetypes";
    var topFileType = "http://localhost:3000/topFileType";
    return {
        getData: function () {
            return $http.get(url)
        },
        getTopFileType: function () {
            return $http.get(topFileType)
        }
    }
})

app.factory("policyChannels", function ($http) {

    var usedPolicies = "http://localhost:3000/usedChannels";
    var availableChannels = "http://localhost:3000/availableChannels";

    return {
        getAvailablechannels: function () {
            return $http.get(availableChannels)
        }
    }

})

app.factory("C2CData", function () {
    var savedData = {}

    function set(data) {
        savedData = data;
    }

    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});

app.factory("reports_factory", function ($http) {
    var menu = "http://localhost:3000/reports_menu"
    return {
        get_menu: function () {
            return $http.get(menu)
        }
    }
})

app.factory("sanitization_factory", function ($http) {

      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var url = "http://"+sname+":4580/api/report/GetSanitizations?"
    var filter_field = "http://localhost:3000/sanitization_filter_fields"
    var details = "http://"+sname+":4580/api/report/GetSanitizationInformation/"


    return {

        get_data: function (index, size, order_field) {
            return $http.get(url + "PageIndex=" + index + "&PageSize=" + size + "&sortField=" + order_field)
        },
        get_filter_fields: function () {
            return $http.get(filter_field)
        },

        get_filter_results: function (filter_query) {
            return $http({
                url: url,
                method: 'GET',
                params: filter_query
            })
        },
        get_details: function (id) {
            return $http.get(details + id)
        }
    }
});
app.factory("system_properties", function ($http) {

      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var propertiesList = "http://"+sname+":4580/api/SystemProperties/GetSystemProperties";
    var propertiesPostList = "http://"+sname+":4580/api/SystemProperties/PostSystemProperties";
    return {
        post_properties: function (props) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: propertiesPostList,
                method: "POST",
                data: props
            });
        },
        get_properties: function () {
            return $http.get(propertiesList);

        }
    }
});

app.factory("telerik_reports_factory", function ($http) {
  var sname = localStorage.getItem("serverName");
   // var sname = serverName == null ? "jdev01": sname

    var reportsList = "http://"+sname+":4580/api/report/GetAvailableReports";

    return {
        get_report_info: function () {
            return $http.get(reportsList);
        }
    }
})

app.factory("system_events_factory", function ($http) {

      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var base_url = "http://"+sname+":4580/api/Report/GetSystemNotifications?"
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
        }
    }
})
app.factory("jobs_factory", function ($http) {

      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var base_url = "http://"+sname+":4580/api/report/GetSanitizationJobs?"
    return {
        get_jobs: function (filter_query) {
            return $http({
                url: base_url,
                method: 'GET',
                params: filter_query
            })
        }
    }
})
app.factory("emails_factory", function ($http) {

      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var base_url = "http://"+sname+"/api/report/GetEmailSanitizations"
    return {
        get_emails: function (index, size, order) {
            return $http.get(base_url + "?PageIndex=" + index + "&PageSize=" + size + "&SortOrder=" + order)
        }
    }
})

app.factory("notification_types", function ($http) {
      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var url = "http://"+sname+":4580/api/general/GetNotificationTypes"
    return {
        get_notifications_types: function () {
            return $http.get(url)
        }
    }
})
app.factory("computer_list", function ($http) {
      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var url = "http://"+sname+":4580/api/users/getadmachines"
    return {
        get_computers: function () {
            return $http.get(url)
        }
    }
})
app.factory("active_users", function ($http) {
      var sname = localStorage.getItem("serverName");
    //var sname = serverName == null ? "jdev01": sname

    var url = "http://"+sname+":4580/api/users/getadusers"
    return {
        get_users: function () {
            return $http.get(url)
        }
    }
})
app.factory("active_agents", function ($http) {
      var sname = localStorage.getItem("serverName");
   // var sname = serverName == null ? "jdev01": sname

    var url = "http://"+sname+":4580/api/Deployment/GetDeployments"
    return {
        get_agents: function () {
            return $http.get(url)
        }
    }
})

app.factory("sanitization_status", function($http){
      var sname = localStorage.getItem("serverName");
 //   var sname = serverName == null ? "jdev01": sname

    var url = "http://"+sname+":4580/api/general/GetSanitizationStatusesList"
    return{
        get_status_list: function(){
            return $http.get(url)
        }
    }
})
