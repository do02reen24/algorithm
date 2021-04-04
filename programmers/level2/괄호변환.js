function solution(p) {
  function splitString(s) {
    let l = 0,
      r = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') l++;
      else r++;
      if (l === r) return [s.substring(0, i + 1), s.substring(i + 1, s.length)];
    }
  }

  function isValid(s) {
    let l = 0,
      r = 0;
    for (let i = 0; i < s.length; i++) {
      if (l < r) return false;
      if (s[i] === '(') l++;
      if (s[i] === ')') r++;
    }
    return true;
  }

  function reverse(s) {
    let result = '';
    for (let i = 1; i < s.length - 1; i++) {
      if (s[i] === ')') result += '(';
      else result += ')';
    }
    return result;
  }

  function answer(input) {
    if (input === '') return '';
    let [u, v] = splitString(input);
    if (isValid(u)) return u + answer(v);
    return '(' + answer(v) + ')' + reverse(u);
  }

  return answer(p);
}
