const validPath = (n, edges, start, end) => {
  const map = new Map();
  let found = false;
  for (let i = 0; i < n; i++) {
    map.set(i, new Set());
  }
  for (const [v, u] of edges) {
    map.get(v).add(u);
    map.get(u).add(v);
  }
  const visited = new Set();
  const dfs = at => {
    if (visited.has(at)) return;
    visited.add(at);
    if (at === end) {
      found = true;
      return;
    }
    for (const v of [...map.get(at)]) {
      dfs(v);
      visited.add(v);
    }
    visited.delete(at);
  };
  dfs(start);
  return found;
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0]
    ],
    0,
    2
  )
);

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3]
    ],
    0,
    5
  )
);
