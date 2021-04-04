function solution(s) {
  const stack = [];
  const remain = s.split('');
  while (remain.length !== 0) {
    const value = remain.pop();
    if (stack.length === 0) {
      stack.push(value);
      continue;
    }
    const last = stack.pop();
    if (value === last) continue;
    stack.push(last);
    stack.push(value);
  }
  return stack.length === 0 ? 1 : 0;
}
