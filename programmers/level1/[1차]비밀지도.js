function solution(n, arr1, arr2) {
  function getBinary(num, n) {
    const str = num.toString(2);
    return ('0'.repeat(n - str.length) + str).split('');
  }

  function getDecode(str1, str2) {
    return str1.reduce((str, v, idx) => {
      if (str1[idx] === '1' || str2[idx] === '1') return str + '#';
      return str + ' ';
    }, '');
  }

  const answer = [];
  for (let i = 0; i < n; i++) {
    const bin1 = getBinary(arr1[i], n);
    const bin2 = getBinary(arr2[i], n);
    const decode = getDecode(bin1, bin2);
    answer.push(decode);
  }
  return answer;
}
