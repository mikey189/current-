app.controller("cases", [function () {

    
    var self = this;
    
    self.draggableObjects = [
                    {name: 'one'},
                    {name: 'two'},
                    {name: 'three'}
                ];
                self.onDropComplete = function (index, obj, evt) {
                    var otherObj = self.draggableObjects[index];
                    var otherIndex = self.draggableObjects.indexOf(obj);
                    self.draggableObjects[index] = obj;
                    self.draggableObjects[otherIndex] = otherObj;
                }
    
   
}])
