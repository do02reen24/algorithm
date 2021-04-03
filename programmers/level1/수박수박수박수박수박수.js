function solution(n) {
  if (n % 2 === 0) return '수박'.repeat(n / 2);
  return '수박'.repeat((n - 1) / 2) + '수';
}
