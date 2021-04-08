function solution(str1, str2) {
  function changeString(str) {
    return str.toUpperCase().replace(/[^A-Z]/g, ' ');
  }
  function getDictionary(str) {
    str = changeString(str);
    const dict = {};
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === ' ' || str[i + 1] === ' ') continue;
      const key = str[i] + str[i + 1];
      if (!dict[key]) dict[key] = 0;
      dict[key] += 1;
    }
    return dict;
  }
  const dict1 = getDictionary(str1);
  const dict2 = getDictionary(str2);
  Object.keys(dict2).forEach((key) => {
    if (dict1[key]) {
      const max = Math.max(dict1[key], dict2[key]);
      const min = Math.min(dict1[key], dict2[key]);
      dict1[key] = max;
      dict2[key] = min;
    } else {
      dict1[key] = dict2[key];
      dict2[key] = 0;
    }
  });
  let sum = Object.values(dict1).reduce((s, v) => s + v, 0);
  let intersection = Object.values(dict2).reduce((s, v) => s + v, 0);
  if (sum === 0) return 65536;
  return Math.floor((intersection / sum) * 65536);
}
