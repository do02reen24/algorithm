function solution(n) {
  const rootValue = Math.sqrt(n);
  if (!Number.isInteger(rootValue)) return -1;
  return Math.pow(rootValue + 1, 2);
}
