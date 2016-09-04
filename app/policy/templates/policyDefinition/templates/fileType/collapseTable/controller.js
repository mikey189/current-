app.controller("PDCollapseTable", [function () {

    this.th = ["Allow", "Size Limit", "Transform", "Process Embbeded files", "Sandbox", "Exception"]
    
    
    this.windows = [
        {
            "EXE": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]

    

    this.mac = [
        {
            "DMG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]


    this.linux = [
        {
            "EXE": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]


    this.java = [
        {
            "EXE": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]

}])
