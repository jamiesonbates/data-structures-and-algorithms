'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { isBalanced } = require('../isBalanced');

const balanced = {
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

const unbalanced = {
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
        right: {
          val: 15,
          left: null,
          right: {
            val: 20,
            left: null,
            right: null
          }
        }
      }
    }
  }
}

suite('function isBalanced', () => {
  test('should return true if tree is balanced', () => {
    assert.strictEqual(isBalanced(balanced), true);
  });

  test('should return false if tree is not balanced', () => {
    assert.strictEqual(isBalanced(unbalanced), false);
  })
});
