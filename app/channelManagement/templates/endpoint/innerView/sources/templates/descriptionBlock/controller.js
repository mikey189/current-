app.controller("endpointSourcesDescriptionBlock", [function () {
    this.description = "";
    $(document).ready(function () {
        $("#descEditButton").click(function () {
            alert("don't forget to add animation to make that button toggle slide up and then back down")
        })
    });
    this.description = "This channel contains the mails, drive, documents and mobiles devices property for the engineering team as well as all the front end developers team"
}])
