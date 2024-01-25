// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(15, 1);
assertEqual("blue", "blue");

//Returns the fist item in an array
const head = function(arrayHead) {
  return arrayHead[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([3]), 3);
assertEqual(head([]), 5);