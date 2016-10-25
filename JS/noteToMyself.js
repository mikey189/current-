//note to myself

//when to use controllers VS directive VS services 

check out http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/

//scope on directives 

//passing a string

//on the controller: 


______passing a string ___________________________

$scope.myName = ‘Jonathan’;

//on the directive:

app.directive(‘dir’, function(){
    return{

            restrict: ‘AECM’,
            templateUrl: ‘templateURl.html’,
            replace: false,
            scope: {
            specialName: ‘@‘
            }

    }

}

//on main html I poke a hole:

 <dir special-name={{myName}}></dir>


//on the template: 

<div>
	<p>
		{{specialName}}
	</p>
</div>


________passing an object _________________________

$scope.person = {name: ‘Jonathan’,
familyName:’Meguira’};


$scope.personAssembler function(person){
return person.name + person.familyName
}
on the directive:

app.directive(‘dir’, function(){
return{

        restrict: ‘AECM’,
        templateUrl: ‘templateURl.html’,
        replace: false,
        scope: {
        person: ‘=‘
        }

    }

}

on main html I poke a hole:

<dir personObject=‘’person’></dir> —> sans {{}} car c’est un object, on ne veut pas de string interpolation avec {{ }} 


on the template: 

<div>
	<p>
		{{personObject.name}}
	</p>
</div>
*/


______passing a function to the isolated scope ______

$scope.person = {name: ‘Jonathan’,
familyName:’Meguira’};

$scope.formattedPerson = function(person){
return person.name + person.familyName;
}

on the directive:

app.directive(‘dir’, function(){
return{

        restrict: ‘AECM’,
        templateUrl: ‘templateURl.html’,
        replace: false,
        scope: {
        personObject: '=',
        formattedPerson: '&'
        }

    }

}

on main html I poke a hole:

<dir personObject='person' formatted-person='formattedPerson(whatever)'></dir> 
              
// here the name passed as a paramter does not matter, we don't care about it, as long as it maches the one given in the template
//
              
on the template: 

<div>
	<p>
		{{formattedPerson({whatever: personObject})}}

        //here we use a mapping for parameter passing
        //note that the first name 'whatever' matches the one provided in the template, and the parametter passed matches the object  in it's know form to the template
	</p>
</div>
    
    
    
_________compile__________

//compile allows you to change pieces of the DOM before they get outputed 

app.directive(‘dir’, function(){
return{

        restrict: ‘AECM’,
        templateUrl: ‘templateURl.html’,
        replace: false,
        scope: {
        personObject: '=',
        formattedPerson: '&'
        },
        compile: function(elem, attrs){
            elem.removeAttr('class');
        //this will remove the class of my dom elements of my template before they get outputted
            
            //compile acts on the directive before it's outputted, post acts on the angular interpolation -> on stuff coming from my controller.compile runs once 
            
            //we use post if for example we want to to make a decision based on the data we get from database, like if the number we get for a number of security threats is negative then apply this logic, this class ('.red') and so on .post runs for all ng-repeat.it runs for every instance of the directive before it's outputted. most of the time we'll use post instead of acting direclty on compile. 
            
            
            //this is why because we never use compile and post we have a shortcode: link 
            
            //we would write instead of compile: 
            
            //
            app.directive(‘dir’, function(){
                return{

                restrict: ‘AECM’,
                templateUrl: ‘templateURl.html’,
                replace: false,
                scope: {
                personObject: '=',
                formattedPerson: '&'
                },
                link: function(scope, elements, attrs){
                    if (scope.person.familyName == 'Meguira'){
                        elements.removeAttr('class');
                    }
                }
                }
                    
                    
    _______ng-transclude__________
                    
                    
//to add a piece of document inside a document_____
                    
//example
//in main.html
                    
<custom-div ng-repeat=''>
      *warning this content is going to get transluded 
</custom-div>
              
                    
//in directive template
<div ng-transclude></div>  

/* this warning is not going to get transcluded unless we allow it like so so in the directive declaration we'll write*/

app.directive('dfbd', function(){
    return{
             restrict: 'AECM',
                    templateUrl:'dfbdfb.html',
                    replace: false,
                    transclude: true //flase by default
    }                   
})
            
            
            
            
            
/*_______calling a function inside a directive nested inside another directive _______________________

Principe de base : poke a holde au niveau le plus proche du controller. 

example: 

Main.htlm
    <directive A></directive A>
        <directive B></directive B>
        

inside directive B that is in the same file as main.html controller-> Declare the scope 


app.directive('fileType', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/fileType.html', 
        replace: false,
        scope: {
            toggleWindowsLines: '&'
        }
    }
})


inside <directive B> call the function that is in the scope 

<td><md-button ng-click='toggleWindowsLines()'>Windows</md-button></td>
<td>

Poke the hole inside directive A when declaring directive B

 <file-type toggle-windows-lines = toggleWindowsLines()></file-type>
 
 
 for live example see 
 
 policy.html
    <second-tab></second-tab>
        <file-type></file-type>
        
        
__________grabbing DOM elements the angular way________

var result = document.getElementsByClassName("execRows");
        var wrappedResult = angular.element(result);
        wrappedResult.toggle();
        
        
_________hide and show elements____________

use angular.element to wrap DOM elements and use toggleClass for render preferences

More: see live example in VIEWS/policy/templates/fileType.html where the tables rows are displayed and hidden on page load 








understadng the difference between compile, pre-link and post-link
->
http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives/

