app.controller('policySidenav', ["policyList", function (policyList) {

    var self = this;
    self.draggableObjects = [];

    policyList.getList().then(function (answer) {
        self.policyList = answer.data
        console.log(self.policyList)
        for (i in self.policyList) {
            self.draggableObjects.push(self.policyList[i])
        }
    })
    self.onDropComplete = function (index, obj, evt) {
        var otherObj = self.draggableObjects[index];
        var otherIndex = self.draggableObjects.indexOf(obj);
        self.draggableObjects[index] = obj;
        self.draggableObjects[otherIndex] = otherObj;
    }
    self.dragMode = false;
}])
