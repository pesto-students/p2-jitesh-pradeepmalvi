const allPathsSourceTarget = graph => {
  let res = [];
  let queue = [[0]];
  while (queue.length) {
    let updatedQueue = [];
    while (queue.length) {
      let cur = queue.shift();
      let parentNodes = [...graph[cur[cur.length - 1]]];
      while (parentNodes.length) {
        let nextNode = parentNodes.pop();
        let newIteraton = [...cur, nextNode];
        if (nextNode == graph.length - 1) res.push(newIteraton);
        else updatedQueue.push(newIteraton);
      }
    }
    queue = updatedQueue;
  }
  return res;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
