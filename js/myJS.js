var username = "clark";
var email = "clark@dailyplanet.com";

function getConfirmation() {
    var retVal = confirm("Do you want to continue?");

    if (retVal == true) {
        document.getElementById("name").value = username;
        document.getElementById("email").value = email;

        //document.write("User will proceed...");
        //return true;

    } else {
        //document.write("User has canceled operation.");
        //return false;
    }
}