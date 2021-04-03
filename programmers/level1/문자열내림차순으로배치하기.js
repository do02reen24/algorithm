function solution(s) {
  return s
    .split('')
    .sort(function (a, b) {
      return b > a ? 1 : -1;
    })
    .join('');
}
