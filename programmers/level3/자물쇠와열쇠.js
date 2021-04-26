function solution(key, lock) {
  function rotationRight(array) {
    let rotationArray = [];
    for (let i = 0; i < array[0].length; i++) {
      let temp = [];
      for (let j = array.length - 1; j >= 0; j--) {
        temp.push(array[j][i]);
      }
      rotationArray.push(temp);
    }
    return rotationArray;
  }

  function isOpen(board, row, col, key) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let kx = i + row;
        let ky = j + col;
        let k = null;
        if (kx >= 0 && kx < key.length && ky >= 0 && ky < key[0].length)
          k = key[kx][ky];
        if (board[i][j] === 1) {
          if (k === 1) return false;
          continue;
        }
        if (board[i][j] === 0 && k === 1) continue;
        return false;
      }
    }
    return true;
  }

  let key90 = rotationRight(key);
  let key180 = rotationRight(key90);
  let key270 = rotationRight(key180);
  let keys = [key, key90, key180, key270];

  for (let i = 1 - lock.length; i < lock.length; i++) {
    for (let j = 1 - lock.length; j < lock.length; j++) {
      for (let k = 0; k < keys.length; k++) {
        if (isOpen(lock, i, j, keys[k])) return true;
      }
    }
  }
  return false;
}
