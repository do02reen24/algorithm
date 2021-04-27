function solution(absolutes, signs) {
  return absolutes.reduce((sum, n, idx) => {
    if (signs[idx] === false) n *= -1;
    return sum + n;
  }, 0);
}
