'use strict';

// test `npm test ./linked-lists/tests/kthElement.test.js`
// TODO:

function kthElement(n, k) {
  let runner = n;
  let count = 0;

  while (n) {
    while (runner) {
      count += 1;
      runner = runner.next;
    }

    if (count === k) {
      return n.value;
    }

    runner = n.next;
    n = n.next;
    count = 0;
  }

  return 0;
}

module.exports = { kthElement };
