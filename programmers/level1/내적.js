function solution(a, b) {
  return a.reduce((sum, n, idx) => sum + n * b[idx], 0);
}
