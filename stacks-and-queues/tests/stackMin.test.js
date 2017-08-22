'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { StackMin } = require('../stackMin');

const linkedList =  {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: {
        value: 'c',
        next: {
          value: 'b',
          next: {
            value: 'a',
            next: null
          }
        }
      }
    }
  }
}

suite('function stackMin', () => {
  test('push should place new item in array', () => {
    const stack = new StackMin();

    stack.push(5);
    stack.push(6);
    stack.push(7);
    assert.strictEqual(stack.first.val, 7);
  });

  test('push should check the minimum and set it each time', () => {
    const stack = new StackMin();

    stack.push(7);
    stack.push(6);
    stack.push(5);
    assert.strictEqual(stack.first.min, 5);
  });

  test('pop should return the last item added', () => {
    const stack = new StackMin();

    stack.push(5);
    stack.push(6);
    stack.push(7);
    assert.strictEqual(stack.pop(), 7);
  });

  test('min should return the minimum item', () => {
    const stack = new StackMin();

    stack.push(5);
    stack.push(6);
    stack.push(7);
    assert.strictEqual(stack.min(), 5);
  });
});
