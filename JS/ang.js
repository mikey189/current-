 var app = angular.module('resec', ['ngMaterial', 'ngRoute', 'chart.js', 'ngMdIcons', 'material.components.expansionPanels','pascalprecht.translate'])
 
 


//index controller// 


app.controller('index', function($mdSidenav, $translate){
    this.toggleMenu = function(){
        $mdSidenav('left').toggle()
    }
   
     this.changeLanguage = function(key){
        $translate.use(key)
    }
    
      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];
      this.isOpen = false;
      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';
      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'down';
    
})



