'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');

const { routeExists } = require('../routeExists');
class Graph {
  constructor() {
    this.a = {
      routes: ['b', 'c', 'd', 'e']
    },
    this.b = {
      routes: ['c', 'f']
    },
    this.c = {
      routes: ['g']
    },
    this.g = {
      routes: ['z']
    }
  }
}

suite('function routeExists', () => {
  test('should return `NO SUCH ROUTE` if start === end', () => {
    const testGraph = new Graph();

    assert.strictEqual(routeExists(testGraph, 'a', 'a'), 'NO SUCH ROUTE');
  });

  test('should return `NO SUCH ROUTE` if route does not exist', () => {
    const testGraph = new Graph();

    assert.strictEqual(routeExists(testGraph, 'a', 't'), 'NO SUCH ROUTE');
    assert.strictEqual(routeExists(testGraph, 'c', 'a'), 'NO SUCH ROUTE');
  });

  test('should return true if route exists', () => {
    const testGraph = new Graph();

    assert.strictEqual(routeExists(testGraph, 'a', 'z'), true);
    assert.strictEqual(routeExists(testGraph, 'b', 'z'), true);
    assert.strictEqual(routeExists(testGraph, 'g', 'z'), true);
  })
});
