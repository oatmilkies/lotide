//Return the position of each letter in a sentence
const letterPositions = function(sentence) {
  const results = {};
  const alphabet = /[A-Za-z]/;

  for (let i = 0; i < sentence.length; i++) {
    //Remove characters that aren't letters
    if (alphabet.test(sentence[i])) {
      //Add each subsequent index for existing letters
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
        //Add each letter and its index to the object if it doesn't exist
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;