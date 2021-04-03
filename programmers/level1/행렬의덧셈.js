function solution(arr1, arr2) {
  const answer = [];
  const row = arr1.length;
  const col = arr1[0].length;
  for (let r = 0; r < row; r++) {
    const ans = [];
    for (let c = 0; c < col; c++) {
      ans.push(arr1[r][c] + arr2[r][c]);
    }
    answer.push(ans);
  }
  return answer;
}
