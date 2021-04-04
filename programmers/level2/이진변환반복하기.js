function solution(s) {
  let sum = 0;
  let count = 0;
  while (s !== '1') {
    const res = s.split('').reduce((sum, v) => sum + Number(v), 0);
    sum += s.length - res;
    s = '1'.repeat(res).length.toString(2);
    count += 1;
  }
  return [count, sum];
}
