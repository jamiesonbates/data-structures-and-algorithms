'use strict';

// test npm run test ./arrays-and-strings/test/isUnique.test.js`
// TODO: implement an algorithm to determine if a string has all unique characters.

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}

// with data structure (object)
// function isUnique(str) {
//   const obj = {};
//
//   for (const letter of str) {
//     if (!obj.hasOwnProperty(letter)) {
//       obj[letter] = 1;
//     }
//     else {
//       return false;
//     }
//   }
//
//   return true;
// }


module.exports = { isUnique };
