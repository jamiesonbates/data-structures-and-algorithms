'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { linkBSTDepths } = require('../linkBSTDepths');

const binarySearchTree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: {
        val: 9,
        left: null,
        right: null
      }
    }
  }
}

suite('function linkBSTDepths', () => {
  test('should create link lists of each depth of a binary search tree', () => {
    const lists = linkBSTDepths(binarySearchTree);

    assert.strictEqual(lists.length, 4);
    assert.strictEqual(lists[0].head.val, 5);
    assert.strictEqual(lists[0].tail.val, 5);
    assert.strictEqual(lists[1].head.val, 3);
    assert.strictEqual(lists[1].tail.val, 7);
    assert.strictEqual(lists[2].head.val, 2);
    assert.strictEqual(lists[2].tail.val, 8);
    assert.strictEqual(lists[3].head.val, 1);
    assert.strictEqual(lists[3].tail.val, 9);
  });
});
