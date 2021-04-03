function solution(n) {
  const s = new String(n);
  return s.split('').reduce((sum, curr) => {
    return sum + Number(curr);
  }, 0);
}
