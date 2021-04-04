function solution(number, k) {
  const answer = number.split('').reduce((arr, n) => {
    if (arr.length === 0) return [n];
    while (arr[arr.length - 1] < n && k !== 0) {
      k--;
      arr.pop();
    }
    arr.push(n);
    return arr;
  }, []);
  while (k !== 0) {
    answer.pop();
    k--;
  }
  return answer.join('');
}
