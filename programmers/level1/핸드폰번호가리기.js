function solution(phone_number) {
  const index = phone_number.length - 4;
  return '*'.repeat(index) + phone_number.substr(index);
}
