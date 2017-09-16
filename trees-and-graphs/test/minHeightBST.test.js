'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { minHeightBST } = require('../minHeightBST');

suite('function minHeightBST', () => {
  test('should return binary search tree with minimum possible height', () => {
    console.log(minHeightBST([1,2,3,4,5,6,7,8,9,10]));
  });
});
