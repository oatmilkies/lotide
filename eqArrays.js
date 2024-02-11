//Compare 2 arrays
const eqArrays = function(arr1, arr2) {

  //Check if the arguments are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  //Check both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //Compare each element
  for (let i = 0; i < arr1.length; i++) {
    //If element is an array, call function and compare again
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      //If not an array, compare element values
    } else if (arr1[i] !== arr2[i]) {
        return false;
    }
  }

  return true;
};

module.exports = eqArrays;