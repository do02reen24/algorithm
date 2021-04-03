function solution(s) {
  let p = 0,
    y = 0;
  s.split('').forEach(function (value) {
    if (value === 'P' || value === 'p') p += 1;
    if (value === 'Y' || value === 'y') y += 1;
  });
  return p === y;
}
