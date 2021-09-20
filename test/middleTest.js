const assert = require('chai').assert;
const middle = require('../middle');


// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
    });
    it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
    });
  });