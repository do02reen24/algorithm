function solution(priorities, location) {
  let q = priorities.map((value, idx) => [value, idx]);
  priorities.sort((a, b) => a - b);
  for (let count = 1; ; count++) {
    const maxValue = priorities.pop();
    let front = q.shift();
    while (front[0] !== maxValue) {
      q.push(front);
      front = q.shift();
    }
    if (front[1] === location) return count;
  }
}
