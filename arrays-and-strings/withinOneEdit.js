'use strict';

// test `npm test ./arrays-and-strings/test/withinOneEdit.test.js`
// TODO: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function withinOneEdit(str1, str2) {
  let lowerLen;
  let diffCount = 0;

  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  if (str1.length > str2.length) {
    lowerLen = str2.length;
    diffCount += 1;
  }
  else if (str1.length < str2.length) {
    lowerLen = str1.length;
    diffCount += 1;
  }
  else {
    lowerLen = str1.length;
  }

  for (let i = 0; i < lowerLen; i++) {
    if (str1[i] !== str2[i]) {
      diffCount += 1;
    }

    if (diffCount > 1) {
      return false;
    }
  }

  return true;
}

module.exports = { withinOneEdit };
