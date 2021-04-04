function solution(name) {
  const cost = name
    .split('')
    .map((char) =>
      Math.min(char.charCodeAt(0) - 65, 90 - char.charCodeAt(0) + 1)
    );
  let answer = 0,
    index = 0;
  while (1) {
    answer += cost[index];
    cost[index] = 0;
    const sum = cost.reduce((s, v) => s + v, 0);
    if (sum === 0) break;
    let left = 1,
      right = 1;
    let leftIndex = index === 0 ? name.length : index;
    let rightIndex = index === name.length - 1 ? -1 : index;
    while (cost[leftIndex - left] === 0) {
      left += 1;
      if (leftIndex - left < 0) leftIndex = name.length + index;
    }
    while (cost[rightIndex + right] === 0) {
      right += 1;
      if (rightIndex + right >= name.length) rightIndex = index * -1;
    }
    answer += Math.min(left, right);
    index = left < right ? leftIndex - left : rightIndex + right;
  }
  return answer;
}
