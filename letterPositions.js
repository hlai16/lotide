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

  
// console.log(letterPositions('hello'));
  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
    
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
  
