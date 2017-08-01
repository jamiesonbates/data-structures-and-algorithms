'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { permutation } = require('../permutation');

suite('permutation function', () => {
  test('strings that are alike should return true', () => {
    assert.strictEqual(permutation('Hello', 'oHell'), true);
  });

  test('strings that are not alike should return false', () => {
    assert.strictEqual(permutation('Hello', 'World'), false);
  });
});
