'use strict';

// test `npm test ./trees-and-graphs/test/isBalanced.test.js`
// TODO: implement a fcuntion to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

function checkHeight(node) {
  if (!node) return 0;

  const leftHeight = checkHeight(node.left);
  if (leftHeight === 'Not balanced') return 'Not balanced';
  const rightHeight = checkHeight(node.right);
  if (rightHeight === 'Not balanced') return 'Not balanced';

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return 'Not balanced';
  }
  else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function isBalanced(node) {
  return checkHeight(node) !== 'Not balanced';
}

module.exports = { isBalanced };
