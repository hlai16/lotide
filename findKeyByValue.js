const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

// alternative solution suggested by Imtiaz, my mentor:
/*
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};
*/

module.exports = findKeyByValue;

