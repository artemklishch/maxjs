function sumUp(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
// linear time complexity - O(n)

const arr = [1, 2, 3];
console.log(sumUp(arr));
