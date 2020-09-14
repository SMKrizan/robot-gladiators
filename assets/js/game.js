//this creates a function named "fight" using an object called "window" associated with a particular set of internal actions and tools; objects are accessed via connection to functions (in this case "prompt") using dot notation. Function+object="method". The "var" keyword and variable name "playerName" (camel casing for more than one word is best practice - JS cannot interpret hyphens) will store the value passed by user with aid of assignment operator "=" and statement terminator ";". //
var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
// the following method "developer console" is used to communicate info to developers (rather than using a window prompt which is generally for communicating to users). Like "window", "console" is an object provided by the browswer - an API - outside of the JS language but which interfaces with the browser console window.
console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
//this will do math and log the sum
console.log(10 + 10);
//what is this?
console.log("Our robot's name is " + playerName);
function fight() {
    // this is an expression containing a function with "function" keyword and function name "fight"; it is a best practice to name functions based on their functionality. The code wrapped in curly braces is the "code block"
    window.alert("The fight has begun!");
}
// fight();