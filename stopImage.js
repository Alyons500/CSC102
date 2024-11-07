 

 
 
 function stopImage() {

    document.getElementById("startButton").disabled = false;
    // this function will move the image
    document.getElementById("stopButton").disabled = true;
    //call the built in Javascript function to 
    clearInterval(interValId);

 }