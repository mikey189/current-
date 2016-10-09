app.factory("authService", ["$rootScope", "$http", function ($rootScope, $http) {

    return {
        checkLogin: function (username, password) {
            var url = $rootScope.url + "/api/users/login";

            console.log($rootScope.url, "this the rootscope")
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






app.factory("channelData", function ($http, $rootScope) {
    var url = "http://localhost:3000/channels";
    var inputURL = "http://localhost:3000/inputList";
    var outputListURL = "http://localhost:3000/outputList";
    var channelsIconsURL = "http://localhost:3000/channelsIcons";
    var dashboard = "http://localhost:3000/dashboard";
    var relayList = "http://localhost:3000/relayList";
    var computerList = "http://localhost:3000/userComputers";
    var channelList = "http://localhost:3000/channelList";
    var channelListReal = $rootScope.url + "/api/channels/getALLCHANNELS";
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
        getReal: function () {
            return $http.get(real)
        }
    }
})
app.factory("channelDashboard", function ($http) {
    var url = "  http://localhost:3000/channelDashboard";
    return {
        getData: function () {
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

app.factory("policyList", function ($rootScope, $http) {
    var policyList = $rootScope.url + "/api/policy/getallpolicies";
    //"http://localhost:3000/policyList";
    var policyOrder = $rootScope.url + "/api/policy/reorderPolicyPriority";
    //"http://localhost:3000/policyOrder"
    var deletePolicy = $rootScope.url + "/api/policy/deletepolicy";
    return {
        getList: function () {
            return $http.get(policyList);
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

app.factory("policyData", function ($http) {
    var url = "http://localhost:3000/policyDefinition";
    var url2 = "http://localhost:3000/policyDescriptionToolip";
    return {
        addData: function (data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                method: "POST",
                data: data
            })
        },
        getData: function () {
            return $http.get(url).then(function (response) {
                return response.data
            })
        },
        getDescriptions() {
            return $http.get(url2).then(function (response) {
                return response.data
            })
        }
    }
})


app.factory("users", function ($http) {
    var url = "  http://localhost:3000/activeUsers";
    return {
        getUsers: function () {
            return $http.get(url).then(function (answer) {
                return answer.data;
            })
        }
    }
})

//get icons for the channels


//service to pass data between step 1 and step 2

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

//to run server json-server api.json B"H
