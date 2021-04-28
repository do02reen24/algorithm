function solution(rows, columns, queries) {
  function rotate(board, [sx, sy, ex, ey]) {
    let next = board[sx - 1][sy - 1];
    let min = rows * columns;
    for (let i = sy - 1; i < ey - 1; i++) {
      let temp = board[sx - 1][i + 1];
      board[sx - 1][i + 1] = next;
      next = temp;
      if (next < min) min = next;
    }
    for (let i = sx; i < ex; i++) {
      let temp = board[i][ey - 1];
      board[i][ey - 1] = next;
      next = temp;
      if (next < min) min = next;
    }
    for (let i = ey - 2; i > sy - 2; i--) {
      let temp = board[ex - 1][i];
      board[ex - 1][i] = next;
      next = temp;
      if (next < min) min = next;
    }
    for (let i = ex - 2; i > sx - 2; i--) {
      let temp = board[i][sy - 1];
      board[i][sy - 1] = next;
      next = temp;
      if (next < min) min = next;
    }
    return min;
  }
  function makeBoard(rows, columns) {
    const array = [];
    for (let i = 0; i < rows; i++) {
      const temp = [];
      for (let j = 1; j <= columns; j++) {
        temp.push(columns * i + j);
      }
      array.push(temp);
    }
    return array;
  }
  const board = makeBoard(rows, columns);
  return queries.reduce((arr, query) => {
    arr.push(rotate(board, query));
    return arr;
  }, []);
}
