function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });
  return results;
}

function solution(expression) {
  const permutation = getPermutations(['+', '-', '*'], 3);
  const expressionArray = expression
    .split('')
    .reduce(
      (arr, v) => {
        if (v === '+' || v === '-' || v === '*') arr.push(' ');
        arr.push(v);
        if (v === '+' || v === '-' || v === '*') arr.push(' ');
        return arr;
      },
      ['']
    )
    .join('')
    .split(' ');

  const answer = permutation.reduce((num, operator) => {
    const result = operator.reduce(
      (queue, oper) => {
        const next = [];
        for (let i = 0; i < queue.length; i++) {
          if (queue[i] === oper) {
            next.push(eval(`${next.pop()}${oper}${queue[i + 1]}`));
            i++;
          } else next.push(queue[i]);
        }
        return next;
      },
      [...expressionArray]
    );
    return Math.max(num, Math.abs(result[0]));
  }, 0);
  return answer;
}
