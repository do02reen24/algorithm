function solution(s) {
  const words = s.split(' ');
  return words
    .map((word) => {
      return word
        .split('')
        .map((a, idx) => {
          if (idx % 2 === 0) return a.toUpperCase();
          return a.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}
