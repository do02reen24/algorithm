function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  const arr = new Array(n + 1).fill(0);
  lost.forEach((person) => (arr[person] -= 1));
  reserve.forEach((person) => (arr[person] += 1));
  return arr.reduce((sum, value, idx) => {
    if (value === 0 || value === 1) return sum + 1;
    else if (value === -1) {
      if (arr[idx - 1] === 1) arr[idx - 1] = 0;
      else if (arr[idx + 1] === 1) arr[idx + 1] = 0;
      else return sum;
      return sum + 1;
    }
    return sum;
  }, -1);
}
