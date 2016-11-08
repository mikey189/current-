app.factory("authService", ["$rootScope", "$http", function ($rootScope, $http) {

    return {
        checkLogin: function (username, password) {
            var url = $rootScope.url + "/api/users/login";

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
    var url = "http://localhost:3000/channels";
    var inputURL = "http://localhost:3000/inputList";
    var outputListURL = "http://localhost:3000/outputList";
    var channelsIconsURL = "http://localhost:3000/channelsIcons";
    var dashboard = "http://localhost:3000/dashboard";
    var relayList = "http://localhost:3000/relayList";
    var computerList = "http://localhost:3000/userComputers";
    var channelList = "http://jdev01:4580/api/channels/getallchannels"
        //var channelList = "http://localhost:3000/channelList";
    var channelListReal = "http://jdev01:4580/api/channels/getALLCHANNELS";
    var channelDashboard = "http://jdev01:4580/api/channels/getchanneldashboard/"
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
        getInputList: function () {
            return $http.get(inputURL)
        },
        getOutputList: function () {
            return $http.get(outputListURL)
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

app.factory("addPolicy", function ($http, $rootScope) {
    var url = $rootScope.url + "/api/policy/postPolicy";
    //"http://jdev01:4580/api/Policy/PostPolicy"
    return {
        add: function (data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                method: "POST",
                data: data
            })
        }
    }
})

app.factory("policyData", function ($rootScope, $http) {

    var policyList = "http://jdev01:4580/api/policy/getallpolicies";
    //http://localhost:3000/policyList
    var policyOrder = $rootScope.url + "/api/policy/reorderPolicyPriority";
    //"http://localhost:3000/policyOrder"
    var deletePolicy = $rootScope.url + "/api/policy/deletepolicy";
    var policySidenav = "http://jdev01:4580/api/policy/GetPoliciesSideNav"

    var topFiles = "http://localhost:3000/PDTopFiles";
    var topUsers = "http://localhost:3000/PDTopUsers";
    
    var policyDefinition = "http://localhost:3000/policyDefinition";
    var fileExtensionsDescription = "http://localhost:3000/policyDescriptionToolip";
    var policyDashboard = "http://jdev01:4580/api/policy/GetPolicyDashboardInfo/";
    var filetype = "http://jdev01:4580/api/general/filetypes";
    var postFiletype = "http://jdev01:4580/api/policy/PostPolicyFileTypes/"
    

    return {
        getList: function () {
            return $http.get(policyList);
        },
        getSidenav: function(){
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
        getDashboard: function(id) {
            return $http.get(policyDashboard + id)
        },
        getDescriptions() {
            return $http.get(fileExtensionsDescription).then(function (response) {
                return response.data
            })
        },
        getFiletypes: function(){
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

app.factory("policyDetection", function ($http) {
    var url = "http://localhost:3000/policyDetection"
    return {
        post: function (data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                method: "POST",
                data: data
            })
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
    var url = "http://jdev01:4580/api/general/filetypes";
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
