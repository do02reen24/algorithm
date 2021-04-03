function solution(n) {
  const prime = [...Array(n + 1).keys()].map((i) => i);
  for (let i = 2; i <= n; i++) {
    if (prime[i] !== 0) {
      for (let j = i + i; j <= n; j += i) prime[j] = 0;
    }
  }
  return prime.reduce((sum, num) => {
    if (num !== 0) return sum + 1;
    return sum;
  }, -1);
}
