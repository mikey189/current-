// ROUTES
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'login/login.html',
            controller: 'login',
            controllerAs: 'login'
            
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
            controllerAs: "ctrl"
        })
        .state('app.agentManagement', {
            url: '/agentManagement',
            templateUrl: 'app/agentManagement/agentManagement.html',
            controller: 'agentManagement',
            controllerAs: 'agentManagement'
        })
        .state('app.cases', {
            url: '/cases',
            templateUrl: 'app/cases/cases.html',
            controller: 'cases',
            controllerAs: 'ctrl'
        })

    .state('app.channelManagement', {
            url: '/channelManagement',
            templateUrl: 'app/channelManagement/channelManagement.html',
            controller: 'channelManagement',
            controllerAs: 'channelManagement'
        })
        /*.state('app.channelManagement.dashboard', {
            url: '/channelManagementDashboard',
            templateUrl: 'app/channelManagement/templates/dashboard/dashboard.html',
            controller: 'channelManagementDashboard',
            controllerAs: 'controller'
        })*/


    .state('app.channelManagement.endpoint', {
            url: '/channelManagementEndpoint',
            templateUrl: 'app/channelManagement/templates/endpoint/endpoint.html',
            controller: 'channelManagementEndpoint',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.dashboard', {
            url: '/CMEndpointDashboard',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/dashboard/dashboard.html',
            controller: 'CMIVDashboard',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.sources', {
            url: '/CMEndpointSources',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/sources/sources.html',
            controller: 'CMIVSources',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.targets', {
            url: '/CMEndpointTargets',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/targets/targets.html',
            controller: 'CMIVTargets',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.settings', {
            url: '/CMEndpointTargets',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/syslog/syslog.html',
            controller: 'CMIVSyslog',
            controllerAs: 'controller'
        })



    .state('app.channelManagement.icap', {
            url: '/channelManagementIcap',
            templateUrl: 'app/channelManagement/templates/icap/icap.html',
            controller: 'channelManagementIcap',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.mail', {
            url: '/channelManagementMail',
            templateUrl: 'app/channelManagement/templates/mail/mail.html',
            controller: 'channelManagementMail',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.newChannel', {
            url: '/channelManagementNewChannel',
            templateUrl: 'app/channelManagement/templates/newChannel/common/common.html',
            controller: 'ncCommon',
            controllerAs: 'ctrl'
        })
        .state('app.channelManagement.newChannel.step1', {
            url: '/channelManagementNewChannelS1',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step1/step1.html',
            controller: 'ncStep1',
            controllerAs: 'ctrl'
        })
        .state('app.channelManagement.newChannel.SInputs', {
            url: '/channelManagementNewChannelS2SeparatedInputs',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/separated/inputs/inputs.html',
            controller: 'separated.inputs',
            controllerAs: 'ctrl'
        })
        
        .state('app.channelManagement.newChannel.SSettings', {
            url: '/channelManagementNewChannelS2SeparatedSettings',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/separated/settings/settings.html',
            controller: 'separated.settings',
            controllerAs: 'ctrl'
        })
        .state('app.channelManagement.newChannel.SComputerList', {
            url: '/channelManagementNewChannelS2SeparatedComputerList',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/separated/computers/computers.html',
            controller: 'separated.computerList',
            controllerAs: 'ctrl'
        })
        .state('app.channelManagement.newChannel.ncStep2Mixed', {
            url: '/channelManagementNewChannelS2Mixed',
            templateUrl: 'app/channelManagement/templates/newChannel/templates/step2/mixed/step2.html',
            controller: 'ncStep2Mixed',
            controllerAs: 'ctrl'
        })









    .state('app.clusterManagement', {
        url: '/clusterManagement',
        templateUrl: 'app/clusterManagement/clusterManagement.html',
        controller: 'clusterManagement',
        controllerAs: 'clusterManagement'
    })

    .state('app.policy', {
            url: '/policy',
            templateUrl: 'app/policy/policy.html',
            controller: 'policy'
        })
        .state('app.policy.dashboard', {
            url: '/policyDashboard',
            templateUrl: 'app/policy/templates/policyDashboardTab/policyDashboardTab.html',
            controller: 'policyDashboardTab'
        })


    .state('app.policy.definition', {
            url: '/policyDefinition',
            templateUrl: 'app/policy/templates/policyDefinition/policyDefinition.html',
            controller: 'policyDefinition'
        })
        .state('app.policy.definition.fileType', {
            url: '/policyDefinitionFT',
            templateUrl: 'app/policy/templates/policyDefinition/templates/fileType/fileType.html',
            controller: 'detection',
            controllerAs: 'ctrl'
        })
        .state('app.policy.definition.detection', {
            url: '/policyDefinitionDetect',
            templateUrl: 'app/policy/templates/policyDefinition/templates/detection/detection.html',
            controller: 'fileType',
            controllerAs: 'ctrl'
        })
        .state('app.policy.definition.settings', {
            url: '/policyDefinitionSettings',
            templateUrl: 'app/policy/templates/policyDefinition/templates/settings/settings.html',
            controller: 'policySettings',
            controllerAs: 'ctrl'
        })


    .state('app.policy.who', {
        url: '/policyWho',
        templateUrl: 'app/policy/templates/who/who.html',
        controller: 'who'
    })

    .state('app.reports', {
            url: '/reports',
            templateUrl: 'app/reports/reports.html',
            controller: 'reports',
            controllerAs: 'reports'
        })
        .state('app.settings', {
            url: '/settings',
            templateUrl: 'app/settings/settings.html',
            controller: 'settings',
            controllerAs: 'settings'
        })


})
