const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  } else {
    const half = Math.floor(length / 2);
    if (length % 2 === 1) {
      return array.slice(half, (length - half));
    } else if (length % 2 === 0) {
      return array.slice((half - 1), (length - half + 1));
    }
  }
  
};

module.exports = middle;

