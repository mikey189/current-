app.controller("reports", function (reports_factory, $state) {
        var self = this;
        reports_factory.get_menu().then(function (answer) {
            var reports = answer.data
        })

        self.reports = [{
            "name": "Sanitization",
            "sref": "app.reports.sanitization"
        }, {
            "name": "Telerik Reports",
            "sref": "app.reports.telerik_reports"
        }, {
            "name": "System Events",
            "sref": "app.reports.systemEvents"
        }, {
            "name": "Scanners",
            "sref": "app.reports.scanners"
        }]
    })
    // url to insert app.reports_scanners