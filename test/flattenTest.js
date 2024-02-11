const assert = require('chai').assert;
const flatten = require('../flatten');

//Testing if the function correctly flattens a multi-dimensional array (one level so far)
describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns ['a, 2, 'b, 'c, 5] for ['a, 2, ['b, 'c], 5]", () => {
    assert.deepEqual(flatten(["a", 2, ["b", "c"], 5]), ["a", 2, "b", "c", 5]);
  });

  it("returns [1] for [[1]]", () => {
    assert.deepEqual(flatten([[1]]), [1]);
  });

});