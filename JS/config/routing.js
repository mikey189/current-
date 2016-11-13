// ROUTES
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'login/login.html',
            controller: 'login',
            controllerAs: 'ctrl'

        })

    .state('app', {
        url: '/app',
        templateUrl: 'app/common/common.html',
        controller: 'common',
        controllerAs: 'common'

    })

    .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'dashboard',
            controllerAs: "ctrl",
            displayName: "Dashboard"
        })
        .state('app.agentManagement', {
            url: '/agentManagement',
            templateUrl: 'app/topology/agents/agentManagement.html',
            controller: 'agentManagement',
            controllerAs: 'ctrl',
            displayName: "Agent Management"
        })
       
    .state('app.channelManagement', {
        url: '/channelManagement',
        templateUrl: 'app/channelManagement/channelManagement.html',
        controller: 'channelManagement',
        controllerAs: 'channelManagement',
        displayName: "Channel Management"
    })

    .state('app.channelManagement.endpoint', {
            url: '/channelManagementEndpoint',
            templateUrl: 'app/channelManagement/templates/endpoint/endpoint.html',
            controller: 'channelManagementEndpoint',
            controllerAs: 'ctrl',
            displayName: "Channel Management"

        })
        .state('app.channelManagement.endpoint.dashboard', {
            url: '/CMEndpointDashboard',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/dashboard/dashboard.html',
            controller: 'channelManagementEndpoint',
            controllerAs: 'controller',
            displayName: "Channel Management"

        })
        .state('app.channelManagement.endpoint.sources', {
            url: '/CMEndpointSources',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/sources/sources.html',
            controller: 'CMIVSources',
            controllerAs: 'controller',
            displayName: "Channel Management"

        })
        .state('app.channelManagement.endpoint.targets', {
            url: '/CMEndpointTargets',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/targets/targets.html',
            controller: 'CMIVTargets',
            controllerAs: 'controller',
            displayName: "Channel Management"

        })
        .state('app.channelManagement.endpoint.settings', {
            url: '/CMEndpointTargets',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/syslog/syslog.html',
            controller: 'channelManagementEndpoint',
            controllerAs: 'ctrl',
            displayName: "Channel Management > Stations using this channel"

        })




    .state('app.channelManagement.newChannel', {
            url: '/channelManagementNewChannel',
            templateUrl: 'app/channelManagement/templates/newChannel/common/common.html',
            controller: 'ncCommon',
            controllerAs: 'ctrl',
            displayName: "New Channel"

        })
        .state('app.channelManagement.newChannel.step1', {
            url: '/channelManagementNewChannelS1',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step1/step1.html',
            controller: 'ncStep1',
            controllerAs: 'ctrl',
            displayName: "New Channel"
        })
        .state('app.channelManagement.newChannel.SInputs', {
            url: '/channelManagementNewChannelS2SeparatedInputs',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/separated/inputs/inputs.html',
            controller: 'separated.inputs',
            controllerAs: 'ctrl',
            displayName: "New Channel"
        })

    .state('app.channelManagement.newChannel.SSettings', {
            url: '/channelManagementNewChannelS2SeparatedSettings',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/separated/settings/settings.html',
            controller: 'separated.settings',
            controllerAs: 'ctrl',
            displayName: "New Channel"

        })
        .state('app.channelManagement.newChannel.SComputerList', {
            url: '/channelManagementNewChannelS2SeparatedComputerList',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/separated/computers/computers.html',
            controller: 'separated.computerList',
            controllerAs: 'ctrl',
            displayName: "New Channel"

        })
        .state('app.channelManagement.newChannel.ncStep2Mixed', {
            url: '/channelManagementNewChannelS2Mixed',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/mixed/step2.html',
            controller: 'ncStep2Mixed',
            controllerAs: 'ctrl',
            displayName: "New Channel"

        })


    .state('app.clusterManagement', {
        url: '/clusterManagement',
        templateUrl: 'app/topology/cluster/clusterManagement.html',
        controller: 'clusterManagement',
        controllerAs: 'clusterManagement',
        displayName: "Topology"

    })

    .state('app.policy', {
            url: '/policy',
            templateUrl: 'app/policy/policy.html',
            controller: 'policy',
            controllerAs: "ctrl"
        })
        .state('app.policy.dashboard', {
            url: '/policyDashboard',
            templateUrl: 'app/policy/templates/policyDashboardTab/policyDashboardTab.html',
            controller: "policy",
            controllerAs: "ctrl",
            displayName: "Policy"

        })


    .state('app.policy.definition', {
            url: '/policyDefinition',
            templateUrl: 'app/policy/templates/policyDefinition/policyDefinition.html',
            controller: 'policy',
            controllerAs: "ctrl",
            displayName: "Policy"

        })
        .state('app.policy.definition.fileType', {
            url: '/policyDefinitionFT',
            templateUrl: 'app/policy/templates/policyDefinition/templates/fileType/fileType.html',
            controller: 'policy',
            controllerAs: 'ctrl',
            displayName: "Policy > Filetype Settings"

        })
        .state('app.policy.definition.detection', {
            url: '/policyDefinitionDetect',
            templateUrl: 'app/policy/templates/policyDefinition/templates/detection/detection.html',
            controller: 'policy',
            controllerAs: 'ctrl',
            displayName: "Policy > Detection Settings"

        })
     .state('app.policy.definition.cdr', {
            url: '/policyCDR',
            templateUrl: 'app/policy/templates/CDR/CDR.html',
            controller: 'policy',
            controllerAs: 'ctrl',
            displayName: "Policy > CDR Settings"

        })
        .state('app.policy.definition.settings', {
            url: '/policyDefinitionSettings',
            templateUrl: 'app/policy/templates/policyDefinition/templates/settings/settings.html',
            controller: 'policy',
            controllerAs: 'ctrl',
            displayName: "Policy > Settings"

        })


    .state('app.policy.who', {
        url: '/policyWho',
        templateUrl: 'app/policy/templates/who/who.html',
        controller: 'policy',
        controllerAs: "ctrl",
        displayName: "Policy > Who Uses This Policy"

    })

    .state('app.reports', {
            url: '/reports',
            templateUrl: 'app/reports/reports.html',
            controller: 'reports',
            controllerAs: 'ctrl',
            displayName: "Reports"

        })
        .state('app.settings', {
            url: '/settings',
            templateUrl: 'app/settings/settings.html',
            controller: 'settings',
            controllerAs: 'settings',
            displayName: "Settings"

        })


})
