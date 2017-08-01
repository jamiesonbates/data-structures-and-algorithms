'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { URLify } = require('../URLify');

suite('URLify function', () => {
  test('string with spaces should return %20 in their place', () => {
    assert.strictEqual(URLify('Hello there Jamieson'), 'Hello%20there%20Jamieson');
  });

  test('string with no spaces should return the original string', () => {
    assert.strictEqual(URLify('HellothereJamieson'), 'HellothereJamieson');
  });
});
