const takeUntil = function(array, callback) {
  // ...
  const mapThru = array.map(callback);
  const findIndex = mapThru.indexOf(true);
  return array.slice(0, findIndex);
};

module.exports = takeUntil;

