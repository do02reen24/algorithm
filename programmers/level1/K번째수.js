function solution(array, commands) {
  return commands.map(function (command) {
    return array
      .slice(command[0] - 1, command[1])
      .sort((a, b) => a - b)[command[2] - 1];
  });
}
