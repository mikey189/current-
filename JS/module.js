 var app = angular.module('resec', ['ngMaterial', 'ui.router', 'chart.js', 'ngMdIcons', 'pascalprecht.translate', 'xeditable', 'ui.bootstrap', 'ngDraggable',
     'angular.vertilize', 'checklist-model', 'ngDragDrop', 'jsonFormatter', 'md.data.table', 'ng.httpLoader'
 ])

//spinner / loader for GET/POST requests

 app.config([
     'httpMethodInterceptorProvider',
     function (httpMethodInterceptorProvider) {
         var sname = localStorage.getItem("serverName");
         httpMethodInterceptorProvider.whitelistDomain(sname);
     }
 ])