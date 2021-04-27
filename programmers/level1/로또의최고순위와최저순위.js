function solution(lottos, win_nums) {
  function getRank(n) {
    if (n === 0 || n === 1) return 6;
    return 7 - n;
  }
  let winMap = win_nums.reduce((dict, n) => {
    dict[n] = true;
    return dict;
  }, {});
  let zero = lottos.reduce((sum, n) => {
    if (n === 0) sum += 1;
    return sum;
  }, 0);
  let correct = lottos.reduce((count, n) => {
    if (winMap[n] === true) count += 1;
    return count;
  }, 0);
  return [getRank(correct + zero), getRank(correct)];
}
