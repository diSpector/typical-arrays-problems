
exports.min = function min (array = 'undefined') {
  if (array == 'undefined' || array.length == 0){
    return 0;
  }
  return Math.min(...array);
}

exports.max = function max (array = 'undefined') {
  if (array == 'undefined' || array.length == 0){
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array = 'undefined') {
  if (array == 'undefined' || array.length == 0){
    return 0;
  }
  let sum = array.reduce((a, b) => a + b, 0);
  let avg = (sum / array.length);
  return avg;
}
