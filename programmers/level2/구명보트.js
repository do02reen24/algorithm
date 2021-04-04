function solution(people, limit) {
  let answer = 0;
  let left, right;
  people.sort((a, b) => a - b);
  while (people.length > 0) {
    if (!right && people.length > 0) right = people.pop();
    if (!left && people.length > 0) left = people.shift();
    if (left && left + right <= limit) left = null;
    right = null;
    answer += 1;
  }
  if (left !== null) answer += 1;
  return answer;
}
