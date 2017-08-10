'use strict';

// test `npm test ./tests/removeDupes.test.js`
// Problem: write code to remove duplicates from an unsorted linked list. FOLLOW UP: how would you solve this problem if a temporary buffer is not allowed.


// WARNING: not working...need different testing implementation
function removeDupes(linkedList) {
  const buffer = [];
  let n = linkedList;

  while (n.next) {
    if (buffer.includes(n.next.val)) {
      n.next = n.next.next;
    }
    else {
      buffer.push(n.next.val);
    }

    n = n.next;
  }

  return n;
}

module.exports = { removeDupes };
