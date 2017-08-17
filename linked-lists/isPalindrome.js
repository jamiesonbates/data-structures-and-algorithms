'use strict';

// test `npm test ./linked-lists/tests/isPalindrome.test.js`
// TODO: implement a function to check if a linked list is a palindrome.

function isPalindrome(node) {
  let reverse;

  while (node) {
    if (!reverse) {
      reverse = { value: node.value, next: null }
    }
    else {
      reverse = { value: node.value, next: reverse };
    }

    node = node.next;
  }

  while (node) {
    if (node.value !== reverse.value) {
      return false;
    }

    node = node.next;
    reverse = reverse.next;
  }

  return true;
}

module.exports = { isPalindrome };
