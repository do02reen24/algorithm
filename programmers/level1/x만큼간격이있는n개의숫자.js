function solution(x, n) {
  const answer = [x];
  for (let i = 1; i < n; i++) {
    answer.push(x + x * i);
  }
  return answer;
}
