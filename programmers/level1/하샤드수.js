function solution(x) {
  const total = String(x)
    .split('')
    .reduce(function (sum, curr) {
      return sum + Number(curr);
    }, 0);
  if (x % total === 0) return true;
  return false;
}
