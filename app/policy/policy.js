app.controller('policy', ["filetype","policyList", function (filetype, policyList) {
    
    var self = this;

    
    
    filetype.getTopFileType().then(function (answer) {
        self.topFiles = answer.data
    });


    
    
    //dragMode for policySideNav
    
    self.draggableObjects = [];

    policyList.getSidenav().then(function (answer) {
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
    
    
    
    


}])
