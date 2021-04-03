function solution(dartResult) {
  let answer = [0];
  let index = 0;
  let number;
  while (index < dartResult.length) {
    let command = dartResult[index];
    index += 1;
    if (command === 'S') {
      answer.push(number);
    } else if (command === 'D') {
      answer.push(number * number);
    } else if (command === 'T') {
      answer.push(number * number * number);
    } else if (command === '*') {
      answer[answer.length - 2] *= 2;
      answer[answer.length - 1] *= 2;
    } else if (command === '#') {
      answer[answer.length - 1] *= -1;
    } else {
      if (command === '1' && dartResult[index] === '0') {
        command += dartResult[index];
        index += 1;
      }
      number = Number(command);
    }
  }
  return answer.reduce((sum, value) => sum + value, 0);
}
