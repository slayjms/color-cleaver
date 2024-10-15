const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1)
const color2 = getInput(2)
if(color2 === undefined && isValidSecondary(color1)){
    console.log(colorDeconstructor(color1))
    //they want to deconstruct
    //check for secondary color validity
    //log out response
}else if(isValidPrimary(color1) && isValidPrimary(color2)){
        console.log(colorCombinator(color1, color2))
}
        
    //they want to combine
    //check valid two separate primary colors
    //log out response




// node color-cleaver.js blue yellow => console.log("Blue and yellow make green.")
// node color-cleaver.js purple => console.log("Purple is made up of blue and red.")
// node color-cleaver.js nothing => console.log("Must be valid primary and secondary colors.")
// node color-cleaver.js blue blue => console.log("error")
// node color-cleaver.js blue => console.log("Must be valid secondary")