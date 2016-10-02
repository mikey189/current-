app.factory("channelData", function ($http) {
    var url = "http://localhost:3000/channels";
    var inputURL = "http://localhost:3000/inputList";
    var outputListURL = "http://localhost:3000/outputList";
    var channelsIconsURL = "http://localhost:3000/channelsIcons";
    var dashboard = "http://localhost:3000/dashboard";
    var relayList = "http://localhost:3000/relayList";
    var computerList = "http://jdev01:4580/api/users/getadmachines";
    var real = "http://jdev01:4580/api/channels/getallchannels";
    return {
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


app.factory("policyList", function ($http) {
    var policyList = "http://localhost:3000/policyList";
    var policyOrder = "http://localhost:3000/policyOrder"
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
        }
    }
})



app.factory("dashboardData", function ($http) {
    var inputURL = "http://localhost:3000/dashboardInputs";
    var totalInputURL = "http://localhost:3000/dashboardTotalInputs";
    var outputURL = "http://localhost:3000/dashboardOutputs"

    return {
        getInput: function () {
            return $http.get(inputURL)
        },
        getTotalInput: function () {
            return $http.get(totalInputURL)
        },
        getOutput: function () {
            return $http.get(outputURL)
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
