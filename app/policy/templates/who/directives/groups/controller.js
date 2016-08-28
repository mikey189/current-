app.controller('groupsList', function(){
    
    this.votes  = ["item 1", "item 2", "item 3"];
    this.expand = function(vote) {
       vote.show = !vote.show;
    }
    
    this.groupList  =["HR", "Management", "Engineering", "PM", "Marketing"]
})


