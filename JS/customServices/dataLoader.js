app.factory("channelList", function ($http) {
    var url = "http://localhost:3000/channels";
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
        }
    }
})

//to run server json-server api.json B"H