'use strict';

// test: `npm run test ./arrays-and-strings/test/permutation.test.js`
// TODO: given two strings, write a method to decide if one is a permutation of the other.

function permutation(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    const idx = str2.indexOf(str1[i]);

    if (idx < 0) {
      return false;
    }

    str2 = str2.slice(0, idx) + str2.slice(i);
  }

  return true;
}


module.exports = { permutation };
