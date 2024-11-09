// create a function to test to see if a wrod is a palindrome
function checkPalindrome(wordToTest) {
    // remove  all of he spaces in the string that was passed in
    var cleanedWord = wordToTest.replace(/\s/g,"").toLowerCase();

   
 
//take our cleaned word woth no spaces and all lower case and reverse it
    var reversedWord = cleanedWord.split("").reverse().join("");

// if the cleaned and reversed words are the smae , the function returns true 
// if they are differant, the function returns false
    return cleanedWord == reversedWord;

    

}

 console.log("radar=" + checkPalindrome("radar"));
 console.log("tag=" + checkPalindrome("tag"));
 console.log("A man a plan a canal panama=" + checkPalindrome("radar"));

// bContinue will track if the user want to keep entering words
var  bContinue = true;

// loop to keep running the code as the user wants

do {
 var userInput = prompt('Enter a word to test if ti is a palidrome:        ');

 //test the variable
var isPalindrome = checkPalindrome(userInput);

if (isPalindrome == true){ // is palindrome  == true  
    alert(userInput + "This is a palidrome!");


}else { 
    alert(userInput + "is Not a palidrome!");


}
 var answer = prompt("Do you want to continue? (y/n)");

 

 


if(answer  == "n" ||  answer == "N" ) {
 alert(userInput + "Good bye");
  var bContinue = false; // change bcountinue to false so we can wait exit our
}

 

} while (bContinue); 



  

  
