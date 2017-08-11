'use strict';

// test `npm test ./linked-lists/tests/partition.test.js`
// TODO: write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

function partition(n, p) {
  let left = null;
  let right = null;
  let leftTail = null;

  while (n.next) {
    if (n.data < p) {
      if (!left) {
        left = n;
        leftTail = n;
      }
      else {
        leftTail.next = n;
        leftTail = n;
      }
    }
    else {
      if (!right) {
        right.next = null;
        right.data = n.data;
      }
      else {
        right.next = right;
        right.data = n.data;
      }
    }
  }

  leftTail.next = right;

  console.log(left);

  return left;
}

module.exports = { partition };
