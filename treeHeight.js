/**
 * 
 * Height is the number of edges (connections) on the longest path from the root to a leaf node
 * 
 */

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const treeHeight = (root) => {
  if (!root) return 0;

  const queue = [root];
  let level = 0;

  while (queue.length) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const first = queue.shift();
      if (first.left) queue.push(first.left);
      if (first.right) queue.push(first.right);
    }

    level++;
  }

  return level - 1;
}

const root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.left.right = new Node(5)
root.left.right.left = new Node(7)

root.right.left = new Node(6)

console.log(treeHeight(root)) // 3