function solution(arr, divisor) {
  let answer = [];
  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }

  if (answer.length === 0) answer.push(-1);
  return answer;
}
