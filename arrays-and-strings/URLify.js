'use strict';

// test `npm test ./arrays-and-strings/test/URLify.test.js`
// TODO: write a method to replace all spaces in a string with '%20.' You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

function URLify(str) {
  const arr = str.split('');

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20';
    }
  }

  return arr.join('');
}

module.exports = { URLify };
