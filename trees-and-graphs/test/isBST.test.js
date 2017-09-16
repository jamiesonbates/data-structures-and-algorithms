'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { isBST } = require('../isBST');

const binarySearch = {
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

const justBinary = {
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
      val: 8,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: {
        val: 7,
        left: null,
        right: null
      }
    }
  }
}

suite('function isBST', () => {
  test('should return true if it is a binary search tree', () => {
    assert.strictEqual(isBST(binarySearch), true);
  });

  test('should return false if it is not a binary search tree', () => {
    assert.strictEqual(isBST(justBinary), false);
  });
});
