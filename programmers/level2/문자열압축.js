function solution(s) {
  if (s.length === 1) return 1;
  let answer = 1000;
  for (let i = 1; i <= s.length / 2; i++) {
    let result = '';
    let beforeStr = s.substring(0, i);
    let count = 0;
    for (let j = 0; j <= s.length; j += i) {
      let str = s.substring(j, j + i);
      if (beforeStr === str) {
        count += 1;
        if (j + i <= s.length) continue;
      }
      if (count !== 1) result += count.toString();
      result += beforeStr;
      count = 1;
      beforeStr = str;
    }
    if (beforeStr.length !== i) result += beforeStr;
    answer = Math.min(result.length, answer);
  }
  return answer;
}
