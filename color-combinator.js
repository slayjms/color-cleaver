/******************
 * YOUR CODE HERE *
 ******************/
// takes in two primary colors and gives the secondary made of those colors
function colorCombinator(color1, color2){
  if(color1 === 'red' + color2 === 'yellow'){
    return 'makes orange!'
  }else if(color1 === 'red' + color2 === 'blue'){
    return 'makes purple!'
  }else if(color1 === 'yellow' + color2 === 'blue'){
    return 'makes green!'
  }else{
    return 'error'
  }
}

// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
