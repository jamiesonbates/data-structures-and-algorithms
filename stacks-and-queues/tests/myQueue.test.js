'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { MyQueue } = require('../myQueue');

suite('class MyQueue', () => {
  test('push should add an item to stack if there is not length', () => {
    const queue = new MyQueue();

    queue.push(1);
    assert.strictEqual(queue.stack[0], 1);
  });

  test('push should add an item to temp if there is an item in the queue', () => {
    const queue = new MyQueue();

    queue.push(1);
    queue.push(2);
    assert.strictEqual(queue.temp[0], 2);
  });

  test('peek should reveal the first item added to the queue', () => {
    const queue = new MyQueue();

    queue.push(1);
    queue.push(2);
    queue.push(3);
    assert.strictEqual(queue.peek(), 1);
  });

  test('pop should return the first item added to the queue', () => {
    const queue = new MyQueue();

    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);
    assert.strictEqual(queue.pop(), 1);
    assert.strictEqual(queue.pop(), 2);
    assert.strictEqual(queue.pop(), 3);
    assert.strictEqual(queue.pop(), 4);
    assert.strictEqual(queue.pop(), null);
  });
});
