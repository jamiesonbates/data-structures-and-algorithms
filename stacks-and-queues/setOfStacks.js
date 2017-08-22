'use strict';

// test `npm test ./stacks-and-queues/tests/setOfStacks.test.js`
// TODO: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capactiy. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (this is, pop() should return the same values as it would if there were just a single stack).

class SetOfStacks {
  constructor(max) {
    this.sets = [];
    this.maxLen = max;
  }

  push(item) {
    if (!this.sets.length || this.sets[0].length >= this.maxLen) {
      const stack = [item];

      this.sets.unshift(stack);

      return;
    }

    const set = this.sets.shift();

    set.unshift(item);
    this.sets.unshift(set);
  }

  pop() {
    if (!this.sets.length) {
      return null;
    }

    const set = this.sets.shift();
    const item = set.shift();

    if (set.length) {
      this.sets.unshift(set);
    }

    return item;
  }
}

module.exports = { SetOfStacks };
