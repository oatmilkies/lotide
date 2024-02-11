//Compare 2 arrays
const eqArrays = require('./eqArrays');

//Output to console if arrays are equal or not
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else {
    console.log("❌ Arrays are not equal");
  }
};

module.exports = assertArraysEqual;