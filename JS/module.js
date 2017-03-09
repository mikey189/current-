 var app = angular.module('resec', ['ngMaterial', 'ui.router', 'chart.js', 'ngMdIcons',
     'xeditable', 'ui.bootstrap', 'ngDraggable', 'angular.vertilize', 'ngDragDrop', 'jsonFormatter',
     'md.data.table', 'ng.httpLoader', 'ng-ip-address', 'angular-loading-bar', 'ngAnimate', "googlechart", "ipCookie",
     "ngCookies", "ui.indeterminate", "kendo.directives", "toastr"
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


app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: true,
    closeButton: true,
    closeHtml: '<button>&times;</button>',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },  
    messageClass: 'toast-message',
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