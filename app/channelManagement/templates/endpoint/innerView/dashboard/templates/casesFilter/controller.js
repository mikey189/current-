app.controller("endpointDashboardCasesFilter", [function(){
    
     this.data = [{"name": "Gary Rudowicz", "total": "10", "medium": 6, "low": 2, "high": 2}, {"name": "Meir Lor", "total": "12", "medium": 6, "low": 3, "high": 3}, {"name": "Phill Murstein", "total": "8", "medium": 4, "low": 2, "high": 2}, {"name": "Lauren Smirk", "total": "9", "medium": 3, "low": 3, "high": 3}, {"name": "Oren Mekori", "total": "10", "medium": 4, "low": 3, "high": 3}, {"name": "Jenya Sedin", "total": "12", "medium": 5, "low": 3, "high": 3}, {"name": "Eva Cohen", "total": "15", "medium": 9, "low": 3, "high": 3}, {"name": "Sofia Samilov", "total": "9", "medium": 3, "low": 3, "high": 3}, {"name": "Raphael Schwartz", "total": "15", "medium": 9, "low": 3, "high": 3}];
    
    this.label = ["Medium", "Low", "high"];
    
    
}]);

app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts 
    ChartJsProvider.setOptions({
      chartColors: ['#2D90EA', '#E19F2F', '#E43754']
    });
    
}])