 var app = angular.module('resec', ['ngMaterial', 'ui.router', 'chart.js', 'ngMdIcons',
   'xeditable', 'ui.bootstrap', 'ngDraggable', 'angular.vertilize', 'ngDragDrop', 'jsonFormatter',
   'md.data.table', 'ng.httpLoader', 'ng-ip-address', 'angular-loading-bar', 'ngAnimate', "googlechart", "ipCookie",
   "ngCookies", "ui.indeterminate", "kendo.directives", "toastr", "angular.filter", "angular-notification-icons"
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
 app.config(function (toastrConfig) {
   angular.extend(toastrConfig, {
     allowHtml: true,
     closeButton: true,
     closeHtml: '<button>&times;</button>',
     extendedTimeOut: 0,
     iconClasses: {
       error: 'toast-error',
       info: 'toast-info',
       success: 'toast-success',
       warning: 'toast-warning'
     },
     messageClass: 'toast-message',
     preventOpenDuplicates: true,
     onHidden: null,
     onShown: null,
     onTap: null,
     progressBar: false,
     tapToDismiss: false,
     templates: {
       toast: 'directives/toast/toast.html',
       progressbar: 'directives/progressbar/progressbar.html'
     },
     timeOut: 0,
     titleClass: 'toast-title',
     toastClass: 'toast'
   });
 });
 app.run(['$rootScope', '$location', function ($rootScope, $location) {
   var token = localStorage.getItem("token");
   $rootScope.$on("$routeChangeStart", function (event, next, current) {
    console.log(token);
     if (next.templateUrl === "edit.html") {
       // $location.path('/');
     };
   })
 }]);