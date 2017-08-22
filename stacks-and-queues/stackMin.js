'use strict';

// test `npm test ./stacks-and-queues/tests/stackMin.test.js`
// TODO: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(n) time.

class StackMin {
  constructor() {
    this.first = null
  }

  pop() {
    if (!this.first) {
      return null;
    }

    const item = this.first.val;

    this.first = this.first.next;

    return item;
  }

  push(item) {
    if (!this.first) {
      this.first = { val: item, next: null, min: item };

      return;
    }

    this.first.next = this.first;
    this.first.val = item;

    if (this.first.val < this.first.min) {
      this.first.min = this.first.val;
    }
  }

  min() {
    return this.first.min;
  }
}

module.exports = { StackMin };
