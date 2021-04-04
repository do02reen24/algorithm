function solution(n, a, b) {
  let ans = 1;
  while (true) {
    if (a % 2 === 1) a += 1;
    if (b % 2 === 1) b += 1;
    if (a === b) break;
    a /= 2;
    b /= 2;
    ans += 1;
  }

  return ans;
}
