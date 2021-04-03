function solution(n, m) {
  function GCD(a, b) {
    if (b === 0) return a;
    return GCD(b, a % b);
  }
  function LCM(a, b) {
    return (a * b) / GCD(a, b);
  }
  const gcd = GCD(n, m);
  const lcm = LCM(n, m);
  return [gcd, lcm];
}
