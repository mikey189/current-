app.controller("channelManagementEndpoint", ["C2CData", "channelData", "users", "topCases", function (C2CData, channelData, users, topCases) {

    var self = this;
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    //setting default id for the channel
    self.rootId = typeof (C2CData.get()) == "number" ? C2CData.get() : 1;
    //default view for dashboard is blocked
    self.isBlocked = true;
    //retrieving the dashboard according to channel id
    channelData.getChannelDashboard(self.rootId).then(function (answer) {
        self.channelDashboard = answer.data
    })  
    //top users loading from db.json because there are more instances of users (just nice to render)
    users.getUsers().then(function (response) {
        self.users = response
    })
    //loading topCases from db.json as well because the names are more realistic there 
    topCases.getTopCases().then(function (answer) {
        self.topCases = answer.data
    })
    self.label = ["Medium", "Low", "high"];
    //loading computer list 
    channelData.getComputerList().then(function (answer) {
        self.computerList = answer.data;
    })
    //making active directory computers section disabled by default
    self.are_ad_computers_editable = false
        //loading all computers that are currently being used by the channel
    channelData.get_current_computers(self.rootId).then(function (answer) {
        self.current_computers_in_use = answer.data.ChannelInfo.ComputerList
    })
    
    //setting inputs and outputs screen to not editable by default
    self.are_outputs_and_outputs_editable = false;
    //getting input and output list for "input and ouput" view
    channelData.get_input_output_list().then(function(answer){
        self.iROW_1 = answer.data[0].inputs.slice(0, 3)
        self.iROW_2 = answer.data[0].inputs.slice(3, 6)
        //default property for selecting input or ouput
        self.is_input_selected = false;
    })
    //storing selected inputs and outputs
    self.selected_inputs = []
    self.selected_outputs = []
    
    //setting up initial array to store smbs objects
    self.ismb_list = []
    self.osmb_list = []
    
}])
