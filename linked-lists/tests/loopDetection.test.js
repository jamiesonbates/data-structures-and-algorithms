'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { loopDetection } = require('../loopDetection');

const tail = { value: 1, next: null };
const node = {
  value: 5,
  next: {
    value: 2,
    next: {
      value: 9,
      next: tail
    }
  }
}

tail.next = node;

const linkedList =  {
  value: 1,
  next: {
    value: 2,
    next: node
  }
}

suite('function loopDetection', () => {
  test('should return node that is point of circular list', () => {
    assert.deepEqual(loopDetection(linkedList), node);
  });
});
