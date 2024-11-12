function validateForm() {
    // set up nickname/ shortcut to our

    var firstname = document.getElementById("fname").value;
    var lastname  = document.getElementById("lname").value;
    var zipcode = document.getElementById("zip").value;
  

    // create a new string that concatenates first name + last name 

    var fullname =  firstname + " " + lastname; 

    console.log ("lastname"  + firstname);
    console.log ("lastname"  + lastname);
    console.log("zipcode"  + zipcode);
    console.log("full name"  + fullname);

    if (fullname.length > 20 || fullname.length == 1) {
        document.getElementById("loginStatus").innerHTML = "Please enter a valid name that is less than 20 chararacters";
        //alert("Please enter a valid name that is less than 20 chararacters ");
    }
    else if(zipcode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Please enter a 5 digit zip code";
        //alert("Please enter a 5 digit zip cod--e");
    }
    else{
        document.getElementById("loginStatus").innerHTML = "welcome," + fullName + ",  The secret word is validation.";
        //alert("welcome," + fullName + ",  The secret word is validation.")
    }

    // we don't this page to submit to a server/another page, 
   
    return false;
}