function solution(numbers) {
  function isValid(n, remain) {
    const count = [...new Array(10)].fill(0);
    n.toString()
      .split('')
      .forEach((value) => {
        count[Number(value)] += 1;
      });
    for (let i = 0; i < 10; i++) {
      if (count[i] > remain[i]) return false;
    }
    return true;
  }
  const numberArray = numbers.split('').sort((a, b) => b - a);
  const n = Number(numberArray.join(''));
  const prime = [...Array(n + 1).keys()].map((i) => i);
  for (let i = 2; i <= n; i++) {
    if (prime[i] !== 0) {
      for (let j = i + i; j <= n; j += i) prime[j] = 0;
    }
  }
  const count = numberArray.reduce((arr, value) => {
    arr[Number(value)] += 1;
    return arr;
  }, [...new Array(10)].fill(0));
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (prime[i] !== 0) {
      if (isValid(prime[i], count)) answer += 1;
    }
  }
  return answer;
}
