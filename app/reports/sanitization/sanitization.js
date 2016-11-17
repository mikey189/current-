app.controller("sanitization", function (sanitization_factory) {
    var self = this;
    sanitization_factory.get_data().then(function (answer) {
        self.data = answer.data
        self.limit = self.data.length
    })

    self.selected = [];
    
   
    
    self.query = {
    order: 'StartTime',
    limit: 5,
    page: 1
  };

    self.limitOptions = self.limitOptions ? undefined : [10, 25, 50, 100];
  

   self.options = {
    rowSelection: true,
    multiSelect: true,
    autoSelect: true,
    decapitate: false,
    largeEditDialog: false,
    boundaryLinks: false,
    limitSelect: true,
    pageSelect: true
  };

    

})

