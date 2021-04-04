function solution(n) {
  let arr = [...new Array(n)].map((v, i) => new Array(i + 1).fill(0));
  let num = 1;
  let y = n - 1;
  for (let x = 0; x < Math.ceil(n / 3); x++) {
    for (let i = x * 2; i <= y; i++) {
      if (arr[i][x] !== 0) break;
      arr[i][x] = num++;
    }
    for (let i = x + 1; i < y - x; i++) {
      if (arr[y][i] !== 0) break;
      arr[y][i] = num++;
    }
    for (let i = y; i > x; i--) {
      if (arr[i][i - x] !== 0) break;
      arr[i][i - x] = num++;
    }
    y--;
  }
  return arr.reduce((answer, a) => answer.concat(a), []);
}
