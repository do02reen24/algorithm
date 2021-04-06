function solution(arr) {
  function compress(x, y, len) {
    const number = arr[x][y];
    let isSame = true;
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (number !== arr[i][j]) {
          isSame = false;
          break;
        }
      }
    }
    if (isSame) return number === 0 ? [1, 0] : [0, 1];
    const half = len / 2;
    const range = [
      [x, y],
      [x + half, y],
      [x, y + half],
      [x + half, y + half],
    ];
    const answer = [0, 0];
    for (let i = 0; i < 4; i++) {
      const [zero, one] = compress(range[i][0], range[i][1], half);
      answer[0] += zero;
      answer[1] += one;
    }
    return answer;
  }
  return compress(0, 0, arr.length);
}
