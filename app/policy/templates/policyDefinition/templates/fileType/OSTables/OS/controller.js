app.controller("PDOSTable", [function(){
    this.windows=false;
    this.mac=true;
    this.linux=false;
    this.java=true;
    
    this.showWindows = false;
    this.toggleWindows = function(){
        this.showWindows =! this.showWindows;
        console.log("windows is", this.showWindows)
    }
}])