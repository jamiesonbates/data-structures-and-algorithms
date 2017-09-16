'use strict';

// test `npm test ./trees-and-graphs/test/routeExists.test.js`
// TODO: Route Between Nodes: given a directed graph, design an algorithm to find out whether there is a route between two nodes.

function routeExists(Graph, start, end) {
  if (start === end) return 'NO SUCH ROUTE';
  const queue = [];

  queue.push(start);

  while(queue.length) {
    const current = queue.shift();

    if (current === end) {
      return true;
    }

    if (Graph.hasOwnProperty(current) && !Graph[current].visited) {
      for (const station of Graph[current].routes) {
        queue.push(station);
      }

      Graph[current].visited = true;
    }
  }

  return 'NO SUCH ROUTE';
}

module.exports = { routeExists };
