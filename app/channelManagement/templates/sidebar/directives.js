app.directive("getMyId",["$rootScope", "C2CData", function($rootScope, C2CData){
  return {
      restrict: "A",
      link: function(scope, element, attrs){
             element.bind("click", function(){
              var self = $(this);
              var channel_id = self.attr("_id");
                C2CData.set(channel_id)
                
            }) 
      }
  }
}])