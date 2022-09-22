var playerName = window.prompt("What is your robot's name?");
 console.log(playerName);

 console.log("This logs a string, good for leaving yourself a message");
//  this will do math and log 20 
console.log(10 + 10);
// This is string concatenation! In string concatenation, we can write out a string as we typically would, 
// but in order to include variable data, we need to close the string. 
// To do that, put a plus sign + after the closing quotation, then write the variable name.
// Also, when we concatenate strings we need to include a leading or trailing space in our string 
// so that the concatenated variable doesn't run up against the word before or after it.
console.log("Our robot's name is " + playerName);
// This creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}
// fight();