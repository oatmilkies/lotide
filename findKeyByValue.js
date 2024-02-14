//Search for a given value in the object and return its key
const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;