function calculate(array, index, target, sum) {
  const plus = sum + array[index];
  const minus = sum - array[index];
  if (index + 1 === array.length) {
    if (plus === target || minus === target) return 1;
    return 0;
  }
  return (
    calculate(array, index + 1, target, plus) +
    calculate(array, index + 1, target, minus)
  );
}

function solution(numbers, target) {
  return calculate(numbers, 0, target, 0);
}
