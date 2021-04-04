function solution(maps) {
  const dr = [0, 0, -1, 1];
  const dc = [-1, 1, 0, 0];
  const r = maps.length;
  const c = maps[0].length;
  const board = [...new Array(r)].map((v) => [...new Array(c)].fill(-1));
  let count = 2;
  let q = [];
  let nextQ = [];
  q.push([0, 0]);
  board[0][0] = 1;
  while (q.length > 0) {
    const [ur, uc] = q.pop();
    for (let i = 0; i < 4; i++) {
      const mr = ur + dr[i];
      const mc = uc + dc[i];
      if (mr >= 0 && mr < r && mc >= 0 && mc < c) {
        if (board[mr][mc] !== -1 || maps[mr][mc] === 0) continue;
        nextQ.push([mr, mc]);
        board[mr][mc] = count;
      }
    }
    if (q.length === 0) {
      q = nextQ;
      nextQ = [];
      count += 1;
    }
  }
  return board[r - 1][c - 1];
}
