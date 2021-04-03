function solution(s) {
  const res = s.replace(/[^0-9]/g, '');
  if (s === res && (s.length === 4 || s.length === 6)) return true;
  return false;
}
