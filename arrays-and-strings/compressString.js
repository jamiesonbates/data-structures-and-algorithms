'use strict';

// test `npm test arrays-and-strings/test/compressString.test.js`
// TODO: implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function compressString(str) {
  const obj = {};
  let compressed = '';

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (obj.hasOwnProperty(letter)) {
      obj[letter] += 1;

      if (i + 1 === str.length) {
        const lastLetter = Object.keys(obj)[0];

        compressed += lastLetter;
        compressed += obj[lastLetter];
      }
    }
    else {
      const lastLetter = Object.keys(obj)[0];

      if (lastLetter) {
        compressed += lastLetter;
        compressed += obj[lastLetter];
        delete obj[lastLetter];
      }

      obj[letter] = 1;
    }

    if (compressed.length >= str.length) {
      return str;
    }
  }

  return compressed;
}

module.exports = { compressString };
