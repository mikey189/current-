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

