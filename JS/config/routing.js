// ROUTES
app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'login/login.html',
            controller: 'login',
            controllerAs: 'login'
            })
    
        .state('app', {
           url: '/app', templateUrl:'app/common/common.html',
            controller: 'common',
            controllerAs: 'common'
        })
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'dashboard'
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
            controllerAs: 'cases'
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
        .state('app.channelManagement.api', {
            url: '/channelManagementApi',
            templateUrl: 'app/channelManagement/templates/api/api.html',
            controller: 'channelManagementApi',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.directoryWatcher', {
            url: '/channelManagementDW',
            templateUrl: 'app/channelManagement/templates/directoryWatcher/directoryWatcher.html',
            controller: 'channelManagementDirectoryWatcher',
            controllerAs: 'controller'
        })
    
    
        .state('app.channelManagement.endpoint', {
            url: '/channelManagementEndpoint',
            templateUrl: 'app/channelManagement/templates/endpoint/endpoint.html',
            controller: 'channelManagementEndpoint',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.dashboard', {
            url: '/CMEndpointDashboard',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/dashboard.html',
            controller: 'CMIVDashboard',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.sources', {
            url: '/CMEndpointSources',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/sources.html',
            controller: 'CMIVSources',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.targets', {
            url: '/CMEndpointTargets',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/sources.html',
            controller: 'CMIVTargets',
            controllerAs: 'controller'
        })
        .state('app.channelManagement.endpoint.syslog', {
            url: '/CMEndpointTargets',
            templateUrl: 'app/channelManagement/templates/endpoint/innerView/syslog.html',
            controller: 'CMIVSyslog',
            controllerAs: 'controller'
        })
    
    
        .state('app.channelManagement.endpoint2', {
            url: '/channelManagementEndpoint2',
            templateUrl: 'app/channelManagement/templates/endpoint2/endpoint2.html',
            controller: 'channelManagementEndpoint2',
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
            templateUrl: 'app/channelManagement/templates/newChannel/newChannel.html',
            controller: 'channelManagementNewChannel',
            controllerAs: 'controller'
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
/*

app.config(function ($loginProvider) {

    $loginProvider
        .setDefaultLoggedInState ("app.dashboard")
        .setFallbackState("login")
        .setAuthModule("$authentication")
        .setAuthClearMethod("clearAuthKey")
        .setAuthGetMethod("getAuthKey")
        .setCookieName("__loginState");

});
*/