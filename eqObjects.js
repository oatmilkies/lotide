//Compares 2 objects and return if they are equal or not
const eqObjects = function(obj1, obj2) {

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    //Check if the value is an array and compare the arrays
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
      //Call function again if key value is an object, then compare values
    } else if (typeof obj1[key] === "object" && !Array.isArray(obj1[key])) {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
      //Compare object values
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;