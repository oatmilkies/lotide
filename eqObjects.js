//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//Compares 2 objects
const eqObjects = function(obj1, obj2) {

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    //Check if the value is an array and compare them
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      //Compare primitive data type values
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

// Tests
const fruit1 = { colour: "yellow", type: "banana" };
const fruit2 = { type: "banana", colour: "yellow" };
const fruit3 = { type: "banana", colour: "brown" };
const fruit4 = { colour: "yellow", typeo: "lemon" };
const fruit5 = { type: "banana", colour: ["yellow", "brown"] };
const fruit6 = { colour: ["yellow", "brown"], type: "banana" };
const fruit7 = { type: "banana", colour: ["yellow", "green"] };

assertEqual(eqObjects(fruit1, fruit2), true);
assertEqual(eqObjects(fruit2, fruit3), false);
assertEqual(eqObjects(fruit1, fruit4), false);
assertEqual(eqObjects(fruit5, fruit6), true);
assertEqual(eqObjects(fruit5, fruit7), false);