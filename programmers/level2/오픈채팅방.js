function solution(record) {
  const recordData = record.map((value) => value.split(' '));
  const users = recordData.reduce((dict, [command, id, name]) => {
    if (command === 'Enter' || command === 'Change') dict[id] = name;
    return dict;
  }, {});
  const answer = [];
  recordData.forEach(([command, id]) => {
    if (command === 'Enter') answer.push(users[id] + '님이 들어왔습니다.');
    if (command === 'Leave') answer.push(users[id] + '님이 나갔습니다.');
  });
  return answer;
}
