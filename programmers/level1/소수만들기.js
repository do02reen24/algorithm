const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

const isPrime = function (n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  let divisor = 3;
  let limit = Math.sqrt(n);
  while (limit >= divisor) {
    if (n % divisor === 0) {
      return false;
    }
    divisor += 2;
  }
  return true;
};

const solution = function (nums) {
  const combination = getCombinations(nums, 3);
  return combination.reduce((res, num) => {
    if (isPrime(num[0] + num[1] + num[2])) return res + 1;
    return res;
  }, 0);
};
