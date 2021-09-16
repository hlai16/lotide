const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    console.log('[]');
  } else {
    const half = Math.floor(length / 2);
    if (length % 2 === 1) {
      console.log(array.slice(half, (length - half)));
    } else if (length % 2 === 0) {
      console.log(array.slice((half - 1), (length - half + 1)));
    }
  }
  
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]