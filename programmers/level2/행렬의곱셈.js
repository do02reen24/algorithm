function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const arr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      const num = arr1[i].reduce((sum, value, idx) => {
        return sum + arr1[i][idx] * arr2[idx][j];
      }, 0);
      arr.push(num);
    }
    answer.push(arr);
  }
  return answer;
}
