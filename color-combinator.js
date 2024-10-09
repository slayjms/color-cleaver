/******************
 * YOUR CODE HERE *
 ******************/
// takes in two primary colors and gives the secondary made of those colors
function colorCombinator(color1, color2){
  if(color1 === 'red' && color2 === 'yellow'){
    return 'orange'
  }else if(color1 === 'red' && color2 === 'blue'){
    return 'purple'
  }else if(color1 === 'yellow' && color2 === 'blue'){
    return 'green'
  }else if(color1 === 'yellow' && color2 === 'red'){
    return 'orange'
  }else if(color1 === 'blue' && color2 === 'red'){
    return 'purple'
  }else if(color1 === 'blue' && color2 === 'yellow'){
    return 'green'
  }else{
    return 'error'
  }
  }


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
