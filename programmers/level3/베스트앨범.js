function solution(genres, plays) {
  const playList = genres.reduce((list, genre, idx) => {
    if (!list[genre]) list[genre] = [];
    list[genre].push([plays[idx], idx]);
    return list;
  }, {});
  const playListArray = Object.entries(playList);
  playListArray.sort((a, b) => {
    const playSum = (plays) =>
      plays.reduce((sum, value) => (sum += value[0]), 0);
    return playSum(b[1]) - playSum(a[1]);
  });
  return playListArray.reduce((ans, plays) => {
    plays[1].sort((a, b) => {
      return a[0] - b[0] > 0 ? 1 : -1;
    });
    if (plays[1].length > 1) ans.push(plays[1].pop()[1]);
    ans.push(plays[1].pop()[1]);
    return ans;
  }, []);
}
