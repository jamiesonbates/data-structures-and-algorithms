'ust strict';

const assert = require('chai').assert;
const { suite, test} = require('mocha');

const { rotateMatrix90Degrees } = require('../rotateMatrix90Degrees');

suite('function rotateMatrix90Degrees', () => {
  test('a matrix of N x N should rotate 90 degrees', () => {
    assert.deepEqual(rotateMatrix90Degrees(
      [[1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4]]
      ), 
       [[1, 1, 1, 1,],
        [2, 2, 2, 2],
        [3, 3, 3, 3,],
        [4, 4, 4, 4,]]
    );
  });
});
