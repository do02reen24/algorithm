function solution(s) {
  function isValid(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '[' || str[i] === '(' || str[i] === '{') {
        stack.push(str[i]);
        continue;
      }
      const top = stack.pop();
      if (top === '(' && str[i] === ')') continue;
      if (top === '[' && str[i] === ']') continue;
      if (top === '{' && str[i] === '}') continue;
      return false;
    }
    if (stack.length !== 0) return false;
    return true;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s.slice(i, s.length) + s.slice(0, i);
    if (isValid(str) === true) count += 1;
  }
  return count;
}
