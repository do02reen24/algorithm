function solution(relation) {
  function isSuperset (set, subset) {
      for(const value of subset) {
          if(!set.has(value)) return false;
      }
      return true;
  }
  function getCombinations (arr, selectNumber) {
      const results = [];
      if (selectNumber === 1) return arr.map((value) => [value]);
      arr.forEach((fixed, index, origin) => {
          const rest = origin.slice(index + 1);
          const combinations = getCombinations(rest, selectNumber - 1);
          const attached = combinations.map((combination) => [fixed, ...combination]);
          results.push(...attached);
      });
      return results;
  }
  let answer = [];
  let arr = [...new Array(relation[0].length)].map((v, i) => i);
  for(let i = 1; i <= arr.length; i++) {
      const combination = getCombinations(arr, i);
      const keys = combination.reduce((ans, key) => {
          const dict = {};
          for(let index = 0; index < relation.length; index++) {
              const k = key.reduce((s, i) => s + relation[index][i], "");
              if(dict[k] !== undefined) return ans;
              dict[k] = true;
          }
          ans.push(key);
          return ans;
      }, []);
      keys.forEach((key) => {
          for(let a of answer) {
              if(isSuperset(new Set(key), new Set(a))) return ;
          }
          answer.push(key);
      })
  }
  return answer.length;
}