function countOne(n) {
  return n
    .toString(2)
    .split('')
    .reduce((sum, curr) => {
      if (curr === '1') return sum + 1;
      return sum;
    }, 0);
}

function solution(n) {
  const one = countOne(n);
  while (true) {
    if (one === countOne(++n)) return n;
  }
}
