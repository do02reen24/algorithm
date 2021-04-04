const solution = (brown, yellow) => {
  const calculate = (n, m) => {
    return n * 2 + m * 2 + 4;
  };
  for (let i = 1; i <= yellow; i++) {
    const n = i;
    const m = yellow / n;
    if (!Number.isInteger(m)) continue;
    if (calculate(n, m) === brown) return [m + 2, n + 2];
  }
};
