'use strict';

// test `npm test ./arrays-and-strings/test/zeroMatrix.test.js`
// TODO: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function zeroMatrix(matrix) {
  const width = matrix[0].length;
  const height = matrix.length;
  const coords = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        coords.push([i, j]);
      }
    }
  }

  for (const coord of coords) {
    const y = coord[0];
    const x = coord[1];

    for (let z = 0; z < height; z++) {
      matrix[z][x] = 0;
    }

    for (let a = 0; a < width; a++) {
      matrix[y][a] = 0;
    }
  }

  return matrix;
}

module.exports = { zeroMatrix }
