app.controller('policy', ["policyData", function (policyData) {

    var self = this;

    self.policyId = 2;
    //dragMode for policySideNav

    self.draggableObjects = [];

    policyData.getSidenav().then(function (answer) {
        self.sideNavList = answer.data
        for (i in self.sideNavList) {
            self.draggableObjects.push(self.sideNavList[i])
        }
    })

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


    policyData.getDashboard(self.policyId).then(function (answer) {
        self.dashboardData = answer.data;
    })


    //filetypes

    //getting filetypes
    policyData.getFiletypes().then(function (answer) {
            self.filetype = answer.data
        })
        //creating object to store properties and all changes
    self.types = {};
    //settings default values for DOM Manipulations
    self.areChannelsEditable = false;
    self.areExtensionsVisible = [];
    self.isAdvancedModeOn = false;
    self.isTableEditable = false;

}])
