'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { removeDupes } = require('../removeDupes');

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

suite('function removeDupes', () => {
  test('should remove duplicates from linked list', () => {
    assert.deepEqual(removeDupes(linkedList),
      {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 5,
            next: {
                value: 9,
                next: null
            }
          }
        }
      }
    )
  });
});
