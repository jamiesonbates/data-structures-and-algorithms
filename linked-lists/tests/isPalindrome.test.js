'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { isPalindrome } = require('../isPalindrome');

const linkedList =  {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: {
        value: 'c',
        next: {
          value: 'b',
          next: {
            value: 'a',
            next: null
          }
        }
      }
    }
  }
}

suite('function isPalindrome', () => {
  test('should return true if linked list is palindrome', () => {
    assert.deepEqual(isPalindrome(linkedList), true);
  });
});
