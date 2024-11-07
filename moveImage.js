


var interValId = 0;

var OldX = 0;
var OldY = 0;

function moveImage() {

document.getElementById("startButton").disabled = true;
    // this function will move the image
    document.getElementById("stopButton").disabled = false;
    var image = document.getElementById("FunnyMeme");
  
  
  
    // keeping track of the intervalid will allow us to stop moving the image
    interValId = setInterval(function(){



     // set the z and y coordinates for the image   
        var newX = 5;// moving by 5 pixel - random numn
        var newY = 5; // moving by 5 pixels - random num

        //oldx += newX is the same thing as oldX = oldX + newX
        OldX = OldX + newX;
        //old += newX;
        OldY = OldY + newY;

        console.log( "OldX = OldX + newX")
        console.log(   "OldY = OldY + newY" )



        image.style.left = OldX + "px";
        image.style.top = OldY + "px";
        
    },1000);
      

     
    
}




