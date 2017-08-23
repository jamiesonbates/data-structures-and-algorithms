'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { SetOfStacks } = require('../setOfStacks');

suite('class setOfStacks', () => {
  test('push should add an item into the set of stacks', () => {
    const stacks = new SetOfStacks(4);

    stacks.push(1);
    assert.strictEqual(stacks.sets[0][0], 1);
  });

  test('using push when all stacks are full creates new stack', () => {
    const stacks = new SetOfStacks(3);

    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    stacks.push(4);

    assert.strictEqual(stacks.sets.length, 2);
    assert.strictEqual(stacks.sets[0][0], 4);
  });

  test('pop should return the last item added', () => {
    const stacks = new SetOfStacks(3);

    stacks.push(1);
    stacks.push(2);
    stacks.push(3);

    assert.strictEqual(stacks.pop(), 3);
  });

  test('using pop causes first stack to be removed when there is only one item', () => {
    const stacks = new SetOfStacks(3);

    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    stacks.push(4);

    assert.strictEqual(stacks.pop(), 4);
    assert.strictEqual(stacks.sets.length, 1);
  });
});
