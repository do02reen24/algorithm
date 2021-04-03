function solution(d, budget) {
  d.sort((a, b) => a - b);
  return d.reduce((sum, value) => {
    budget -= value;
    if (budget >= 0) return sum + 1;
    return sum;
  }, 0);
}
