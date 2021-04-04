function solution(m, n, board) {
  let sum = 0;
  let dx = [0, 1, 1, 0];
  let dy = [1, 0, 1, 0];
  while (true) {
    let count = 0;
    let newBoard = [...new Array(n)].map((v) => [...new Array(m)].fill('-'));
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] === '-') continue;
        let isRemove = true;
        for (let k = 0; k < 3; k++) {
          if (board[i][j] !== board[i + dx[k]][j + dy[k]]) isRemove = false;
        }
        if (isRemove === true) {
          for (let k = 0; k < 4; k++) newBoard[i + dx[k]][j + dy[k]] = '@';
        }
      }
    }
    for (let i = 0; i < n; i++) {
      const elements = board.reduce((arr, v, idx) => {
        if (newBoard[idx][i] === '@') count += 1;
        else if (v[i] !== '-') arr.push(v[i]);
        return arr;
      }, []);
      for (let j = m - 1; j >= 0; j--) {
        const value = elements.pop();
        if (value) newBoard[j][i] = value;
        else newBoard[j][i] = '-';
      }
    }
    if (count === 0) break;
    sum += count;
    board = newBoard;
  }

  return sum;
}
