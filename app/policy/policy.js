app.controller('policy', ["$location", "filetype", function ($location, filetype) {
    var self = this;

    self.path = $location.path
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];

    filetype.getTopFileType().then(function (answer) {
        self.topFiles = answer.data
    });




    self.labels = ["", "", "", "", "", "", ""];
    self.series = ['Series A'];
    self.data = [
    [65, 59, 80, 81, 56, 55, 90]
    ];

    self.casesData = [30, 40, 35];
    self.onClick = function (points, evt) {
        console.log(points, evt);
    };


}])
