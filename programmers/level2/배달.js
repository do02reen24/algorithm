function solution(N, road, K) {
  const map = [...new Array(N + 1)].map((v) => new Array(N + 1).fill(0));
  road.forEach(([n1, n2, time]) => {
    if (map[n1][n2] !== 0 && map[n1][n2] < time) return;
    map[n1][n2] = time;
    map[n2][n1] = time;
  });
  const queue = [1];
  const visited = { 1: 0 };
  while (queue.length > 0) {
    const n = queue.pop();
    for (let i = 1; i <= N; i++) {
      if (map[n][i] === 0 || n === i) continue;
      const totalTime = visited[n] + map[n][i];
      if (totalTime <= K) {
        if (visited[i] && visited[i] < totalTime) continue;
        visited[i] = totalTime;
        queue.push(i);
      }
    }
  }
  return Object.keys(visited).length;
}
