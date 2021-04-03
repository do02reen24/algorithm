function solution(n) {
  const arr = String(n).split('');
  return arr.reverse().map((value) => {
    return Number(value);
  });
}
