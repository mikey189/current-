app.controller('policy', ["policyData", function (policyData) {
    
    
    
    
    var self = this;


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
    
    
    //getDashboard data with policyId
    //API Call inside directive :"initiateApiCallWithId" 
}])
