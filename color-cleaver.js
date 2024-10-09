const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1)




// node color-cleaver.js blue yellow => console.log("Blue and yellow make green.")
// node color-cleaver.js purple => console.log("Purple is made up of blue and red.")
// node color-cleaver.js nothing => console.log("Must be valid primary and secondary colors.")
// node color-cleaver.js blue blue => console.log("error")
// node color-cleaver.js blue => console.log("Must be valid secondary")