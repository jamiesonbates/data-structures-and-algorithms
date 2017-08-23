'use strict';

// test `npm test ./stacks-and-queues/tests/myQueue.test.js`
// TODO: implement a MyQueue class which implements a queue using two stacks

class MyQueue {
  constructor() {
    this.stack = [];
    this.temp = [];
  }

  push(item) {
    if (!this.stack.length) {
      this.stack.push(item);
    }
    else {
      this.temp.push(item);
    }
  }

  pop() {
    if (!this.stack.length) {
      return null;
    }

    const item = this.stack.pop();

    if (this.temp.length) {
      this.stack.push(this.temp.shift());
    }

    return item;
  }

  peek() {
    if (!this.stack.length) {
      return null;
    }

    return this.stack[0];
  }
}

module.exports = { MyQueue };
