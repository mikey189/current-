app.controller("CMinfoTopBar", [function(){
    this.lorem = "Endpoint channel is made of all PDF files received through mail";
    
    this.activeAgents = "2545";
    this.openCases = "235";
    this.blockedFiles = "254";
    this.sanitizedFiles = "387";
    
    
  this.labels = ["db", "sdfb", "sd", "dbf", "qdfb", "dfb", "wfb"];
  this.series = ['Sanitized Files'];
  this.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  this.onClick = function (points, evt) {
    console.log(points, evt);
  };
  this.datasetOverride = { yAxisID: 'y-axis-1' };
  this.options = {
    scales: {
      yAxes: 
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
        
      
    }
  };
    
    
}])