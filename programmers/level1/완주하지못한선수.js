function solution(participant, completion) {
  const count = {};
  for (let i = 0; i < completion.length; i++) {
    const name = completion[i];
    if (count[name]) count[name] += 1;
    else count[name] = 1;
  }
  for (let i = 0; i < participant.length; i++) {
    const name = participant[i];
    if (count[name]) count[name] -= 1;
    else return name;
  }
  for (let name of count) {
    if (count[name] !== 0) return name;
  }
}
