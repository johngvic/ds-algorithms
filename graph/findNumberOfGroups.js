const findNumberOfGroups = (relationships) => {
  const graph = new Map();
  for (const [node, neighbors] of Object.entries(relationships)) {
    graph.set(Number(node), neighbors.map(Number));
  }

  const visited = new Set();

  const bfs = (startNode) => {
    const queue = [startNode];
    visited.add(startNode);

    while (queue.length > 0) {
      const node = queue.shift();
      const neighbors = graph.get(node) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  let groups = 0;
  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      bfs(node);
      groups++;
    }
  }

  return groups;
}

/**
 * 
 * The following function receives an array of strings
 * that represent a bi-dimensional matrix of relationships
 * 
 */
const countGroups = (related) => {
  const matrix = [];
  related.forEach((it) => matrix.push(it.split("")));

  if (matrix.length == 0) return 0;

  const matrixLength = matrix[0].length;
  const relationships = {};
  let counter = 0;

  for (let row = 0; row < matrixLength; row++) {
    for (let column = 0; column < matrixLength; column++) {
      if (matrix[row][column] == 1) {
        counter++;
      }

      if (row != column && matrix[row][column] == 1) {
        if (!relationships[row]) {
          relationships[row] = [column]
        } else {
          relationships[row] = [...relationships[row], column]
        }
      }
    }

    if (counter == 1) {
      relationships[row] = []
    }

    counter = 0;
  }

  return findNumberOfGroups(relationships);
}

const relationships = {
  '0': [1],
  '1': [0, 2],
  '2': [1, 4],
  '3': [],
  '4': [2]
}

console.log(findNumberOfGroups(relationships)) // 2, because [0, 1, 2, 4] and [3]