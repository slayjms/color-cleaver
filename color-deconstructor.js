/******************
 * YOUR CODE HERE *
 ******************/
// takes in a secondary color and gives primary colors made up in that
function colorDeconstructor(color){
  if(color === 'purple'){
    return 'red and blue'
  }else if(color === 'orange'){
    return 'red and yellow'
  }else if(color === 'green'){
    return 'blue and yellow'
  }else{
    return 'error'
  }
}

// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
