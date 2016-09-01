app.controller("PDOSTypeFiles", [function () {

               
                this.files = ['EXE', 'JPG', 'PNG', 'XLS', 'CSV'];
                this.groups = ['users', 'computers', 'groups']

              this.name = "Jonathan Meguira"  



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
