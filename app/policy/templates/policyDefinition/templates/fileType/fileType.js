app.controller('fileType', [function($mdDialog, $mdMedia, $compile, $scope) {

   this.showOS = false;
    this.toggleOS = function(){
        this.showOS =! this.showOS;
        console.log(this.showOS)
    }
    
    this.fileTypeSections = ['Allow', 'Size Limit', 'Transform', 'Process Embbeded Files', 'Sandbox', 'Exception'];
 
    
    this.family = ['Executables', 'Images', 'HTML'];
    
    
        
        this.addRow = function(){
            console.log('adding row');
            var div = $("<exception-row></exception-row>");
            var compiled =  $compile(div)($scope);

            $('#appendHere').append(compiled);
            console.log('added');
        }
        this.addOne = function(){
            console.log('adding row');
            var div = $("<exception-row></exception-row>");
            var compiled =  $compile(div)($scope);

            $.append(compiled);
            console.log('added');
        }
        
       
    }]) 
    

