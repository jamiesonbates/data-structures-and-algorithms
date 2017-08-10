'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { kthElement } = require('../kthElement');

const linkedList =  {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 5,
      next: {
        value: 2,
        next: {
          value: 9,
          next: {
            value: 1,
            next: null
          }
        }
      }
    }
  }
}

suite('function kthElement', () => {
  test('should return the kth element in the linked list', () => {
    assert.deepEqual(kthElement(linkedList, 3), 2);
  });
});
