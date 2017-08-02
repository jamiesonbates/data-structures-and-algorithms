'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { withinOneEdit } = require('../withinOneEdit');

suite('function withinOneEdit', () => {
  test('if there is more than 1 edit (insert, update, delete) return false', () => {
    assert.strictEqual(withinOneEdit('pale', 'bake'), false);
    assert.strictEqual(withinOneEdit('bale', 'bale hay'), false);
  });

  test('if there is only 1 edit (insert, update, delete) return true', () => {
    assert.strictEqual(withinOneEdit('pale', 'pal'), true);
    assert.strictEqual(withinOneEdit('pale', 'dale'), true);
    assert.strictEqual(withinOneEdit('pale', 'pales'), true);
  });
})
