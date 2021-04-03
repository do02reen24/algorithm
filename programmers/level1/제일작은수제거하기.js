function solution(arr) {
  const min = Math.min.apply(null, arr);
  arr.splice(arr.indexOf(min), 1);
  if (arr.length === 0) return [-1];
  return arr;
}
