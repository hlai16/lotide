

const countLetters = function(letters) {
  const results = {};
  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};


console.log(countLetters('lighthouse'));

console.log(countLetters('lol'));
