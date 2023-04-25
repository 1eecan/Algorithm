function solution(maps) {
const start = [0, 0];
const end = [maps.length-1,maps[0].length-1];

const visited = new Set();
visited.add(start.toString());

const queue = [start];

const getNeighbors = (vertex) => {
  const [y, x] = vertex;
  const neighbors = [];
  if (y > 0 && maps[y - 1][x] === 1) {
    neighbors.push([y - 1, x]);
  }
  if (x > 0 && maps[y][x - 1] === 1) {
    neighbors.push([y, x - 1]);
  }
  if (y < maps.length - 1 && maps[y + 1][x] === 1) {
    neighbors.push([y + 1, x]);
  }
  if (x < maps[0].length - 1 && maps[y][x + 1] === 1) {
    neighbors.push([y, x + 1]);
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
