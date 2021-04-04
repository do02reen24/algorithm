function getGCD(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : getGCD(maxNum, minNum % maxNum);
}

function solution(w, h) {
  let gcd = getGCD(w, h);
  let a = Math.floor(w / gcd);
  let b = Math.floor(h / gcd);
  return w * h - (a + b - 1) * gcd;
}
