function solution(n) {
  let answer = 1;
  for (let start = 1; start <= n / 2 + 1; start++) {
    let sum = start;
    for (let next = start + 1; next <= n / 2 + 1; next++) {
      sum += next;
      if (sum > n) break;
      if (sum === n) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}
