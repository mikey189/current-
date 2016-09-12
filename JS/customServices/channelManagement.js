app.factory("channelData", function ($http) {
    var url = "http://localhost:3000/channels";
    var inputURL = "http://localhost:3000/inputList";
    var outputListURL = "http://localhost:3000/outputList";
    var channelsIconsURL = "http://localhost:3000/channelsIcons";
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
