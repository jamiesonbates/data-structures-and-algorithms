'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { isUnique } = require('../index');

suite('isUnique function', () => {
  test('return false when string has same character more than once', () => {
    assert.strictEqual(isUnique('hello'), false);
  });

  test('return true when string is unique', () => {
    assert.strictEqual(isUnique('when'), true);
  });
});
