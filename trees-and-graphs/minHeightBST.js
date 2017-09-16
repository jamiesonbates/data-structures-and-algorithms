'use strict';

// test `npm test ./trees-and-graphs/test/minHeightBST.test.js`
// TODO: given a sorted (increasing order) array, create a binary search tree that has a minimum height.

function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function minHeightBST(arr) {
  if (!arr.length) return null;
  const mid = Math.floor(arr.length / 2);
  const tree = new Node(arr[mid]);

  tree.left = minHeightBST(arr.slice(0, mid));
  tree.right = minHeightBST(arr.slice(mid + 1));

  return tree;
}


module.exports = { minHeightBST };
