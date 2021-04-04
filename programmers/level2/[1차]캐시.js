function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let citiesLow = cities.map((v) => v.toLowerCase());
  const cache = new Array(cacheSize);
  return citiesLow.reduce((sum, value) => {
    const index = cache.findIndex((e) => e === value);
    let time = 5;
    if (index !== -1) {
      cache.splice(index, 1);
      time = 1;
    } else cache.shift();
    cache.push(value);
    return sum + time;
  }, 0);
}
