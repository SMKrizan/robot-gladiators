//this creates a function named "fight" using an object called "window" associated with a particular set of internal actions and tools; objects are accessed via connection to functions (in this case "prompt") using dot notation. Function+object="method". The "var" keyword and variable name "playerName" (camel casing for more than one word is best practice - JS cannot interpret hyphens) will store the value passed by user with aid of assignment operator "=" and statement terminator ";". //
var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
window.alert(playerName);
function fight() {
    // this is an expression containing a function with "function" keyword and function name "fight"; it is a best practice to name functions based on their functionality. The code wrapped in curly braces is the "code block"
    window.alert("The fight has begun!");
}
// fight();