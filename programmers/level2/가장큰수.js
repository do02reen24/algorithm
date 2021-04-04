function solution(numbers) {
  const answer = numbers
    .map((n) => n + '')
    .sort((a, b) => (a + b > b + a ? -1 : 1))
    .join('');
  return answer[0] === '0' ? '0' : answer;
}
