const assertEqual = function(actual, expected) {
    if (actual === undefined) {
      console.log('undefined');
    } else if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    } else if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
  };
  
  // TEST CODE
//   assertEqual("Lighthouse Labs", "Bootcamp");
//   assertEqual(1, 1);
  

const head = function(array) {
    if (array === []) {
        return undefined;
    }
    return array[0];   
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);