function solution(n, t, m, p) {
  // 진법, 미리 구할 숫자의 개수, 게임 참가 인원, 튜브의 순서
  let answer;
  let arr = [];
  let count = 0;
  if (m === p) p = 0;
  for (let i = 0; ; i++) {
    const num = i.toString(n).toUpperCase().split('');
    num.forEach((value) => {
      count += 1;
      if (count % m === p) {
        arr.push(value);
        t -= 1;
        if (t === 0) answer = arr.join('');
      }
    });
    if (answer !== undefined) break;
  }
  return answer;
}
