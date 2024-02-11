//Return the middle elements in an array
const middle = function(array) {
  let midArr = [];
  let mid = Math.floor(array.length / 2);

  //Find the middle of the array
  if (array.length <= 2) {
    return midArr;
  }
  //Check if even or odd
  if (array.length % 2 === 0) {
    midArr.push(array[mid - 1]);
    midArr.push(array[mid]);
  } else {
    midArr.push(array[mid]);
  }

  return midArr;
};

module.exports = middle;