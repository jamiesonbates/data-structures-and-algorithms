'use strict';

// test `npm test ./linked-lists/tests/deleteMiddleNode.test.js`
// TODO: implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

function deleteMiddleNode(node) {
  if (!node.next || !node) {
    return false;
  }

  node.data = node.next.data;
  node.next = node.next.next;

  return true;
}

module.exports = { deleteMiddleNode };
