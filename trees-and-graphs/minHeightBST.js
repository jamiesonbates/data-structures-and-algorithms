'use strict';

// test `npm test ./trees-and-graphs/test/minHeightBST.test.js`
// TODO: given a sorted (increasing order) array, create a binary search tree that has a minimum height.

function minHeightBST(arr) {
  const mid = Math.floor(arr.length / 2);
  const tree = { val: arr[mid], left: null, right: null };
}


module.exports = { minHeightBST };
