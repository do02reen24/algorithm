function solution(nums) {
  const maxKinds = new Set(nums).size;
  const half = nums.length / 2;
  return maxKinds > half ? half : maxKinds;
}
