const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const head = require('../letterPositions');

//Testing if the function correctly returns the position of each letter in a sentence
describe("#letterPositions", () => {

  it("returns {a: [ 0, 13 ],b: [ 2, 6, 11 ],i: [ 3 ],g: [ 4 ],l: [ 7 ],u: [ 8 ],9, 12 ],r: [ 14 ]} for 'a big blue bear'", () => {
    assert.deepEqual(letterPositions('a big blue bear'), 
    {
      a: [ 0, 13 ],
      b: [ 2, 6, 11 ],
      i: [ 3 ],
      g: [ 4 ],
      l: [ 7 ],
      u: [ 8 ],
      e: [ 9, 12 ],
      r: [ 14 ]
    });
  });

  it("returns {} for ''", () => {
    assert.deepEqual(letterPositions(""), {});
  });

});