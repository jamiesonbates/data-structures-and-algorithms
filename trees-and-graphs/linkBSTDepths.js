'use strict';

// test `npm test ./trees-and-graphs/test/linkBSTDepths.test.js`
// TODO: given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists);

function Node(val) {
  this.val = val;
  this.next = null;
}

class LinkedList {
  constructor(val) {
    const node = new Node(val);

    this.head = node;
    this.tail = node;
  }

  add(val) {
    const node = new Node(val);

    this.tail.next = node;
    this.tail = node;
  }
}

function linkBSTDepths(node) {
  if (!node) return null;
  const queue = [];
  const lists = [];

  queue.push({ node, depth: 1 });

  while (queue.length) {
    const item = queue.shift();

    if (lists.length < item.depth) {
      lists.push(new LinkedList(item.node.val));
    }
    else {
      lists[item.depth - 1].add(item.node.val);
    }

    if (item.node.left) queue.push({ node: item.node.left, depth: item.depth + 1 });
    if (item.node.right) queue.push({ node: item.node.right, depth: item.depth + 1});
  }

  return lists;
}

module.exports = { linkBSTDepths };
