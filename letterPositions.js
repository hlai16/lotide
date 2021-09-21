const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) { //if the letter already
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]; //put it here
    }
  }
  return results;
};

module.exports = letterPositions;
  
  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



