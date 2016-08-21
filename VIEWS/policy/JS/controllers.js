
app.controller('policy', function($scope, $mdSidenav, $location,$timeout, $q, getUsers){
    var self = this;  
    //______toggling the sideNav______
    $scope.toggleMenu = function(){
        $mdSidenav('policySidenav').toggle()
    }
    
    
    $scope.path = $location.path 
    $scope.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    $scope.casesFilter = ['Open Cases', 'Active Cases', 'High Priority', 'Priority/user'];
    
                          
$scope.labels = ["", "", "", "", "", "", ""];
  $scope.series = ['Series A'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 90]
  ];
    

$scope.casesData= [30, 40, 35];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
    
  
  $scope.lorem=  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.';    
}) 





app.controller('addException', function(){
    var self=this;

}) 

app.controller('customTable', function(){
    var self=this;
    
}) 

app.controller('exceptionRow', function(){
    var self=this;
    
}) 

app.controller('fileType', function($mdDialog, $mdMedia, $compile, $scope) {
    
    
    
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
        $mdDialog.hide 
      };
      this.cancel = function() {
        $mdDialog.cancel 
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
        
       
    }) 



app.controller('detection', function(){
    this.true = true
})


app.controller('policyDashboardTab', function(){
    var self=this;
    
}) 

app.controller('policyGraphToolbar', function(){
    var self=this;
    
}) 

app.controller('policySidenav', function(){
    var self=this;
    
}) 

app.controller('secondTab', function(){
    var self=this;
    
})

app.controller('thirdTab', function(){
    var self=this;
    
})

app.controller('topToolbar', function(){
    var self=this;
    
})

app.controller('settings', function(){
    this.signFiles = true
    this.blockedFiles = false
    this.incorrectExtensions = false
    this.nestingLevel = 3
    this.emailReports = true
})

