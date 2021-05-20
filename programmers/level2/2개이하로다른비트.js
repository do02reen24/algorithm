function solution(numbers) {
  return numbers.reduce((arr, number) => {
    let n = number + 1;
    if (number % 2 !== 0) {
      let nArr = ('0' + number.toString(2)).split('');
      for (let i = nArr.length - 1; i > 0; i--) {
        if (nArr[i] === '1' && nArr[i - 1] === '0') {
          nArr[i] = '0';
          nArr[i - 1] = '1';
          break;
        }
      }
      n = parseInt(nArr.join(''), 2);
    }
    arr.push(n);
    return arr;
  }, []);
}
