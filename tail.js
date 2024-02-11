// Returns the tail of an array
const tail = function(arrayTail) {
  let newArray = arrayTail.slice(1);

  return newArray;
};

module.exports = tail;