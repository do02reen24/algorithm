function solution(operations) {
  const queue = [];
  operations.forEach((input) => {
    console.log(queue);
    const [command, number] = input.split(' ');
    if (command === 'I') {
      let index = 0;
      for (let i = 0; i < queue.length; i++) {
        if (queue[i] > Number(number)) {
          index = i + 1;
          break;
        }
      }
      queue.splice(index, 0, Number(number));
      return;
    }
    if (queue.length === 0) return;
    if (number === '1') queue.shift();
    if (number === '-1') queue.pop();
  });
  if (queue.length === 0) return [0, 0];
  return [queue.shift(), queue.pop()];
}
