function getIntegerSum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

function solution(a, b) {
  if (a === b) return a;
  if (a > b) return getIntegerSum(b, a);
  return getIntegerSum(a, b);
}
