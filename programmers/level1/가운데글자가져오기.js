function solution(s) {
  const len = s.length;
  const index = Math.round(len / 2) - 1;
  if (len % 2 === 0) return s[index] + s[index + 1];
  return s[index];
}
