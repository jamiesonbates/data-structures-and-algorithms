'use strict';

// test `npm test ./linked-lists/tests/loopDetection.test.js`
// TODO: given a circular linked list, implement an algorithm that returns the node at the beginning of the loop. DEFINITION: a circular linked list: A (corrupt) link list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

// EXAMPLE
// input: A -> B -> C -> D -> E -> C (same "C" node as before)
// output: C

function loopDetection(list) {
  let arr = [];

  while (list) {
    for (const node of arr) {
      if (list.next === node) {
        console.log(list.next.next.next);
        console.log(node.next.next);
        return node;
      }
    }

    arr.push(list);
    list = list.next;
  }

  return null;
}

module.exports = { loopDetection };
