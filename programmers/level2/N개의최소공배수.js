function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  arr.sort((a, b) => b - a);
  let answer = 1;
  while (arr.length > 0) {
    answer = lcm(arr.pop(), answer);
  }
  return answer;
}
