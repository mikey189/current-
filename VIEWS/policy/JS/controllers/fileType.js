app.controller('fileType', function($mdDialog, $mdMedia, $compile, $scope) {
    
    
    
    /* begin loading the dialog window to add exceptions*/
    
  this.status = '  ';
  this.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  this.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
  
 
  this.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'VIEWS/policy/templates/addException.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          this.status = 'You said the information was "' + answer + '".';
        }, function() {
          this.status = 'You cancelled the dialog.';
        });
  };


    function DialogController($mdDialog) {
      this.hide = function() {
        $mdDialog.hide();
      };
      this.cancel = function() {
        $mdDialog.cancel();
      };
      this.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
    
    /* end of dialog loading the dialog window to add exceptions*/


    this.text = "this is a test";

    this.fileTypeSections = ['Allow', 'Size Limit', 'Transform', 'Process Embbeded Files', 'Sandbox', 'Exception'];
 
    
    this.family = ['Executables', 'Images', 'HTML'];
    
    this.execs = [
        {
            name: 'Windows',
            version: 'nope',
            size: '12kb',
            transform: 'yes',
            embbed: 'embbed',
            sandbox: 'sandbox',
            exception: 'yes'
        }, 
         {
            name: 'Linux',
            version: 'nope',
            size: '12kb',
            transform: 'yes',
            embbed: 'embbed',
            sandbox: 'sandbox',
            exception: 'yes'
        }, 
         {
            name: 'Mac',
            version: 'nope',
            size: '12kb',
            transform: 'yes',
            embbed: 'embbed',
            sandbox: 'sandbox',
            exception: 'yes'
        }, 
    ]
        this.files = ['EXE', 'JPG', 'PNG', 'XLS', 'CSV'];
        this.groups = ['users', 'computers', 'groups']
        
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
       
    });




