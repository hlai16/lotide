const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
  