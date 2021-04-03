function solution(arr) {
  return arr.reduce(
    function (ans, value) {
      if (ans[ans.length - 1] !== value) ans.push(value);
      return ans;
    },
    [arr[0]]
  );
}
