const findJudge = (N, trust) => {
  const notTrust = new Set();
  for (let i = 1; i <= N; i++) notTrust.add(i);

  const indegree = new Map();
  let maxIndegree = 0,
    judgeCandidate = 1;

  trust.forEach(edge => {
    const [source, destination] = edge;

    notTrust.delete(source);

    if (!indegree.has(destination)) indegree.set(destination, 0);
    let destCount = indegree.get(destination);
    destCount += 1;
    indegree.set(destination, destCount);

    if (destCount > maxIndegree) {
      maxIndegree = destCount;
      judgeCandidate = destination;
    }
  });

  if (maxIndegree === N - 1 && notTrust.has(judgeCandidate))
    return judgeCandidate;
  return -1;
};

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3]
  ])
);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1]
  ])
);
