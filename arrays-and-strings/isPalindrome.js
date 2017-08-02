'use strict';

// test `npm test arrays-and-strings/test/isPalindrome.test.js`
// TODO: given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearragement of letters. The palindrome does not need to be limited to just dictionary words.

function isPalindrome(str1, str2) {
  const len = str1.length;

  if (len !== str2.length) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[len - i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = { isPalindrome };
