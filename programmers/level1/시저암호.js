function solution(s, n) {
  return s
    .split('')
    .map((char) => {
      if (char === ' ') return ' ';
      let value = char.charCodeAt(0);
      if (value + n > 122) value -= 26;
      else if (value + n > 90 && value <= 90) value -= 26;
      return String.fromCharCode(value + n);
    })
    .join('');
}
