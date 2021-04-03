function getIndex(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') return i;
  }
  return -1;
}

function solution(seoul) {
  return '김서방은 ' + getIndex(seoul) + '에 있다';
}
