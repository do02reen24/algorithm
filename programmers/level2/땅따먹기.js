function solution(land) {
  function getMaxValue(array, index) {
    return array.reduce((maxValue, value, idx) => {
      if (idx === index) return maxValue;
      return maxValue < value ? value : maxValue;
    }, 0);
  }

  const answer = land.map((value) => value);
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      answer[i][j] += getMaxValue(answer[i - 1], j);
    }
  }

  return Math.max(...answer[answer.length - 1]);
}
