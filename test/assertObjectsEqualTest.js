const assertObjectsEqual = require('../assertObjectsEqual');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true
//   console.log(`Example label: ${inspect(actual)}`);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false