 var app = angular.module('resec', ['ngMaterial', 'ui.router', 'chart.js', 'ngMdIcons',
     'xeditable', 'ui.bootstrap', 'ngDraggable', 'angular.vertilize', 'ngDragDrop', 'jsonFormatter',
     'md.data.table', 'ng.httpLoader', 'ng-ip-address', 'angular-loading-bar', 'ngAnimate', "googlechart", "ipCookie",
     "ngCookies", "ui.indeterminate", "kendo.directives"
 ])

 //spinner / loader for GET/POST requests

 app.config([
     'httpMethodInterceptorProvider', '$httpProvider',
     function (httpMethodInterceptorProvider, $httpProvider) {
         var sname = localStorage.getItem("serverName");
         httpMethodInterceptorProvider.whitelistDomain(sname);
         $httpProvider.interceptors.push("401Error");
     }
 ]);

