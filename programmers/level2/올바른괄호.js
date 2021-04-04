function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    if (s[i] === ')') {
      if (stack.pop() !== '(') return false;
    }
  }
  return stack.length === 0 ? true : false;
}
