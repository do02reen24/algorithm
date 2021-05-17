function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let half = Math.floor(Math.sqrt(i));
    if (half * half === i) answer -= i;
    else answer += i;
  }
  return answer;
}
