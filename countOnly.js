//Returns an object containing counts of everything that the input object listed
const countOnly = function(allItems, itemsToCount) {
  //Create new object to store the count of each first name
  const results = {};
  //Only add the names in the argument object
  for (const item of allItems) {
    if (itemsToCount[item]) {
      //Set a property with that string key to the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;