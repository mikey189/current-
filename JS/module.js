 var app = angular.module('resec', ['ngMaterial', 'ui.router', 'chart.js', 'ngMdIcons', 'pascalprecht.translate',
  'xeditable', 'ui.bootstrap', 'ngDraggable','angular.vertilize', 'checklist-model', 'ngDragDrop', 'jsonFormatter', 
  'md.data.table', 'ng.httpLoader', 'ng-ip-address','angular-loading-bar', 'ngAnimate', "googlechart", "ipCookie"
 ])

//spinner / loader for GET/POST requests

 app.config([
     'httpMethodInterceptorProvider',
     function (httpMethodInterceptorProvider) {
         var sname = localStorage.getItem("serverName");
         httpMethodInterceptorProvider.whitelistDomain(sname);
     }
 ])

 $httpProvider.interceptors.push(function($q, $cookies) {
    return {
     'request': function(config) {
          config.headers['Token'] = $cookies.token;
          return config;
      }
    };
  });
