'use strict';

// test `npm test ./arrays-and-strings/test/rotateMatrix90Degrees.test.js`
// TODO: given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix90Degrees(matrix) {
  const n = matrix.length;

  while (matrix.length !== n * 2) {
    matrix.push([]);

    for (let i = 0; i < n; i++) {
      matrix[matrix.length - 1].unshift(matrix[i].shift());
    }
  }

  return matrix.splice(matrix.length - n);
}

module.exports = { rotateMatrix90Degrees };
