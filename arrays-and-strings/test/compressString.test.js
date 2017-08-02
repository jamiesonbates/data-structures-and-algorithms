'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { compressString } = require('../compressString');

suite('function compressString', () => {
  test('a string that will be longer compressed than not should return original string', () => {
    assert.strictEqual(compressString('hhwweerrtt'), 'hhwweerrtt');
    assert.strictEqual(compressString('hhhhhhhhasdfvfhr'), 'hhhhhhhhasdfvfhr');
  })

  test('a string that can be compressed into a smaller string should be', () => {
    assert.strictEqual(compressString('aaabcccccaaa'), 'a3b1c5a3');
  })
});
