'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { zeroMatrix } = require('../zeroMatrix');

suite('function zeroMatrix', () => {
  test('if a position in matrix is 0, the column and row should all become 0', () => {
    assert.deepEqual(zeroMatrix([[1, 2, 3, 4, 5], [6, 7, 0, 9, 10], [0, 12, 13, 14, 15]]), [[0, 2, 0, 4, 5], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  })
});
