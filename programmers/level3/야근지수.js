function solution(n, works) {
  function calculateN(array) {
    return array.reduce((sum, n) => {
      if (n > 0) sum += n * n;
      return sum;
    }, 0);
  }
  if (works.length === 1) return calculateN([works[0] - n]);
  works.sort((a, b) => a - b);
  while (n > 0) {
    let index = works.length - 1;
    while (works[index] >= works[index - 1] && n > 0) {
      works[index] -= 1;
      n -= 1;
    }
    const now = works.pop();
    for (let i = index - 1; i >= -1; i--) {
      if (i === -1 || works[i] < now) {
        works.splice(i + 1, 0, now);
        break;
      }
    }
  }
  return calculateN(works);
}
