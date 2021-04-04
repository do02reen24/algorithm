function solution(s) {
  const numbers = s.split(' ').sort((a, b) => Number(a) - Number(b));
  return numbers.shift() + ' ' + numbers.pop();
}
