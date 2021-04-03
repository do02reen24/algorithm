const phone = [
  [1, 4, 7, '*'],
  [2, 5, 8, 0],
  [3, 6, 9, '#'],
];

const getDistance = (a, b) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};

const solution = function (numbers, hand) {
  let leftHand = [0, 3];
  let rightHand = [2, 3];
  return numbers
    .map((n) => {
      let isLeft = true;
      const lIndex = phone[0].indexOf(n);
      const rIndex = phone[2].indexOf(n);
      let move = [-1, -1];
      if (lIndex !== -1) move = [0, lIndex];
      else if (rIndex !== -1) {
        isLeft = false;
        move = [2, rIndex];
      } else {
        const index = phone[1].indexOf(n);
        move = [1, index];
        const lLength = getDistance(leftHand, move);
        const rLength = getDistance(rightHand, move);
        if (lLength === rLength) {
          if (hand === 'right') isLeft = false;
        } else if (lLength > rLength) isLeft = false;
      }
      if (isLeft) {
        leftHand = move;
        return 'L';
      }
      rightHand = move;
      return 'R';
    })
    .join('');
};
