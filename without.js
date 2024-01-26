//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  //Check both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  } else //Compare each element of the arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  return true;
};

//Output to console if arrays are equal or not
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else
    console.log("❌ Arrays are not equal");
};

//Create new array without unwanted elements
const without = function(orig, remove) {
  let newArray = [];
  
  //Find elements that match in both arrays
  for (let i = 0; i < orig.length; i++) {
    let match = false;

    for (let j = 0; j < remove.length; j++) {
      if (orig[i] === remove[j]) {
        match = true;
      }
    }
    //Add the elements that don't match
    if (match === false) {
      newArray.push(orig[i]);
    }
    
  }

  return newArray;
};


//Test cases
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], [2, 5]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);