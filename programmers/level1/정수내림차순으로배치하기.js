function solution(n) {
  const s = new String(n);
  return Number(
    s
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
