function solution(n) {
  let answer = [];
  answer.push([1, 0]);
  answer.push([1, 1]);
  for (let i = 2; i < n; i++) {
    const one = (answer[i - 1][0] + answer[i - 2][1]) % 1234567;
    const two = (answer[i - 2][0] + answer[i - 1][1]) % 1234567;
    answer.push([one, two]);
  }
  return (answer[n - 1][0] + answer[n - 1][1]) % 1234567;
}
