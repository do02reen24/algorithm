function solution(msg) {
  const answer = [];
  const dict = {};
  let count = 1;
  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = count++;
  }
  let word = msg[0];
  let index = 1;
  while (index < msg.length) {
    const next = msg[index++];
    const nextWord = word + next;
    if (dict[word] && !dict[nextWord]) {
      answer.push(dict[word]);
      dict[nextWord] = count++;
      word = next;
    } else word = nextWord;
  }
  answer.push(dict[word]);
  return answer;
}
