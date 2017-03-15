(function() {
'use strict';

    angular
        .module('resec')
        .filter('CDRFilter', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(Params) {
            for (i in Params){
             var grouped = _.groupBy(Params[i], Params[i][1])
             console.log(grouped)   
            }
            return Params;
        }
    }
})();