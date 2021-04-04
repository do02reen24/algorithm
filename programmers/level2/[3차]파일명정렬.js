function solution(files) {
  let answer = files.map((file) => {
    const [
      ,
      head,
      number,
      tail,
    ] = /([a-zA-Z \.-]+)([0-9]+)([0-9a-zA-Z \.-]*)/i.exec(file);
    return [head, number, tail];
  });

  return answer
    .sort((a, b) => {
      const [headA, numberA] = a;
      const [headB, numberB] = b;
      if (headA.toLowerCase() === headB.toLowerCase()) {
        return Number(numberA) - Number(numberB);
      }
      return headA.toLowerCase() >= headB.toLowerCase() ? 1 : -1;
    })
    .map((v) => v.join(''));
}
