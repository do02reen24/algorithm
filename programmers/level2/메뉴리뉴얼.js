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

function solution(orders, course) {
  const answer = [];
  course.forEach((time) => {
    let max = 0;
    const menu = orders.reduce((dict, order) => {
      const combinations = getCombinations(order.split('').sort(), time);
      combinations.forEach((combination) => {
        const name = combination.join('');
        if (!dict[name]) dict[name] = 0;
        dict[name] += 1;
        if (dict[name] > max) max = dict[name];
      });
      return dict;
    }, {});
    if (max < 2) return;
    Object.keys(menu).forEach((key) => {
      if (menu[key] === max) answer.push(key);
    });
  });
  return answer.sort();
}
