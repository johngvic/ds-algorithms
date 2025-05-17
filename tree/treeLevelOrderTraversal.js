/**
 * 
 * It should return all existing nodes for each level
 * 
 */

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const treeLevelOrderTraversal = (root) => {
  if (!root) return [];

  const levels = [];
  const queue = [root];

  while (queue.length) {
    const queueLenght = queue.length;
    const currentLevel = [];

    for (let i = 0; i < queueLenght; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levels.push(currentLevel);
  }

  return levels;
}

const root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.left.right = new Node(5)
root.left.right.left = new Node(7)

root.right.left = new Node(6)

console.log(treeLevelOrderTraversal(root)) // [ [ 1 ], [ 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]