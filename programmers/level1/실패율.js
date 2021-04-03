function solution(N, stages) {
  const arr = [...new Array(N + 1)].map((v, idx) => [idx + 1, 0, 0]);
  stages.sort((a, b) => b - a);
  stages.forEach((value) => {
    arr[value - 1][1] += 1;
  });
  let sum = 0;
  for (let i = N; i >= 0; i--) {
    sum += arr[i][1];
    if (sum !== 0) arr[i][2] = arr[i][1] / sum;
  }
  arr.pop();
  return arr
    .sort((a, b) => {
      return a[2] <= b[2] ? 1 : -1;
    })
    .map((v) => v[0]);
}
