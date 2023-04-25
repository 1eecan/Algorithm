function solution(maps) {
const start = [0, 0];
const end = [maps.length-1,maps[0].length-1];

const visited = new Set();
visited.add(start.toString());

const queue = [start];

const getNeighbors = (vertex) => {
  const [x, y] = vertex;
  const neighbors = [];
  if (x > 0 && maps[x - 1][y] === 1) {
    neighbors.push([x - 1, y]);
  }
  if (y > 0 && maps[x][y - 1] === 1) {
    neighbors.push([x, y - 1]);
  }
  if (x < maps.length - 1 && maps[x + 1][y] === 1) {
    neighbors.push([x + 1, y]);
  }
  if (y < maps[0].length - 1 && maps[x][y + 1] === 1) {
    neighbors.push([x, y + 1]);
  }
  return neighbors;
};

let distance = 1;

while (queue.length) {
  const queueLength = queue.length;
  for (let i = 0; i < queueLength; i++) {
    const currVertex = queue.shift();
    if (currVertex.toString() === end.toString()) {
      return distance;
    }
    const neighbors = getNeighbors(currVertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.toString())) {
        visited.add(neighbor.toString());
        queue.push(neighbor);
      }
    }
  }
  distance++;
}

return -1;

}