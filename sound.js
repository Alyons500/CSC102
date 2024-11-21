 //This function will add sounds to our page 
 function addSound() {
    var soundElem = document.createElement("audio");
    // SHORT CUT TO PLAY SOUND
    var btnplay = document.getElementById("btnplay");
    //SHORTCUT TO PAUSE THE GAME
    var btnpause = document.getElementById("btnpause");
    //  SET UP TE ID='AUDIO SOUND' ATTIBUTE ON OUR AUDIO ELEMENT
    soundElem.setAttribute("id", "audioSound");

    soundElem.setAttribute("src", "cd-player-noise-99629.mp3");

    document.body.appendChild(soundElem);

    btnplay.hidden = false;
    btnpause.hidden = false;

    function playSound() {
        //set upo a nickname.shortcut
        var audio = document.getElementById("audioSound");

        audio.play();

        console.log("soundplayer");

    }
    function pauseSound() {


        var audio =  document.getElementById("audioSound");

        audio.pause();

        console.log("sound paused");
    }


}

