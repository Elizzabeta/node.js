exports.addition = function(a, b) {
  return a + b;
}

exports.subtraction = function(a, b) {
  if(a > b) {
    return a - b;
  } else {
    return b - a;
  }
}