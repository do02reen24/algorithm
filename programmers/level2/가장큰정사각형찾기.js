function solution(board) {
  const x = board.length,
    y = board[0].length;
  let r = 0;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (board[i][j] === 0) continue;
      let result = board[i][j];
      if (i !== 0 && j !== 0) {
        const diagonal = board[i - 1][j - 1];
        const top = board[i - 1][j];
        const left = board[i][j - 1];
        if (diagonal === 0 || top === 0 || left === 0) continue;
        result = Math.min(diagonal, top, left) + 1;
        board[i][j] = result;
      }
      if (result > r) r = result;
    }
  }
  return r * r;
}
