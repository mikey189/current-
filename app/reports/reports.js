app.controller("reports", function ($state, $mdToast) {
        var self = this;


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

        self.showSimpleToast =  (SelectedView) => {
            $mdToast.show(
                $mdToast.simple()
                .textContent(SelectedView)
                .position("bottom right")
                .hideDelay(1500)
            );
        };

    })
    // url to insert app.reports_scanners