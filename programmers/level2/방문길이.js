function solution(dirs) {
  const move = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  const visited = {};
  let user = [0, 0];
  dirs.split('').forEach((command) => {
    const [x, y] = move[command];
    const next = [user[0] + x, user[1] + y];
    if (next[0] < -5 || next[0] > 5 || next[1] < -5 || next[1] > 5) return;
    const route = `${user[0]}${user[1]}${next[0]}${next[1]}`;
    const routeReverse = `${next[0]}${next[1]}${user[0]}${user[1]}`;
    if (!visited[route] && !visited[routeReverse]) visited[route] = true;
    user = next;
  });
  return Object.keys(visited).length;
}
