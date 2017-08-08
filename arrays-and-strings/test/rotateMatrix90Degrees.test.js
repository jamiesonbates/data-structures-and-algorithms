'ust strict';

const assert = require('chai').assert;
const { suite, test} = require('mocha');

const { rotateMatrix90Degrees } = require('../rotateMatrix90Degrees');

suite('function rotateMatrix90Degrees', () => {
  test('a matrix of N x N should rotate 90 degrees', () => {
    assert.deepEqual(rotateMatrix90Degrees(
      [[1, 2, 3, 4],
       [5, 6, 7, 8],
       [9, 10, 11, 12],
       [13, 14, 15, 16]]
      ),
       [[13, 9, 5, 1,],
        [14, 10, 6, 2],
        [15, 11, 7, 3,],
        [16, 12, 8, 4,]]
    );
  });
});
