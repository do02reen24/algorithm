function solution(n) {
  const num = ['4', '1', '2'];
  let answer = '';
  let sum = 0;
  while (n > 0) {
    let remain = n % 3;
    let share = Math.floor(n / 3);
    answer = num[remain] + answer;
    if (remain === 0) share--;
    n = share;
  }
  return answer;
}
