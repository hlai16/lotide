const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

