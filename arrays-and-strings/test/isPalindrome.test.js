'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { isPalindrome } = require('../isPalindrome');

suite('function isPalindrome', () => {
  test('strings of different lengths should return false', () => {
    assert.strictEqual(isPalindrome('this', 'this is'), false);
  });

  test('strings that are palindromes should return true', () => {
    assert.strictEqual(isPalindrome('this', 'siht'), true);
    assert.strictEqual(isPalindrome('Hello World', 'dlroW olleH'), true);
  });

  test('strings that are not palindromes should return false', () => {
    assert.strictEqual(isPalindrome('Hi there, ho there', 'Hi there, ho there'), false);
    assert.strictEqual(isPalindrome('Hi there buddy', 'yddub ereth iX'), false)
  });
});
