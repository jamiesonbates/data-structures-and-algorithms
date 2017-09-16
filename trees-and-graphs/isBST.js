'use strict';

// test `npm test ./trees-and-graphs/test/isBST.test.js`
// TODO: implement a function to check if a binary tree is a binary search tree

function isBST(node) {
  if (!node) return true;

  if (node.left) {
    if (node.left.val >= node.val) {
      return false;
    }
  }

  if (node.right) {
    if (node.right.val <= node.val) {
      return false;
    }
  }

  return isBST(node.left) && isBST(node.right);
}

module.exports = { isBST };
