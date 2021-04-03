function solution(arr) {
  let sum = arr.reduce(function (sum, value) {
    return sum + value;
  }, 0);
  return sum / arr.length;
}
