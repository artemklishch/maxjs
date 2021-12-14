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
const arr = [30, 29, 54];

// [30,29,54] ==> [30,29,54,60]
// [ 0, 1, 2] ==> [0,1,2,3]
arr.push(60); // constant time complexity - O(1)

// [30,29,54] ==> [110,30,29,54]
// [ 0, 1, 2] ==> [0,1,2,3]
arr.unshift(110); // linear time complexity - O(n)

const myAge = arr[1]; // constant time complexity - O(1)

// -------

const namePopularity = [
  { userName: "Bob", usage: 5 },
  { userName: "Tom", usage: 6 },
];
const tomUsages = namePopularity.find((p) => p.userName === "Tom").usage;
// BEST CASE - constant time complexity - O(1)
// WORST CASE - linear time complexity - O(n)
// AVERAGE CASE: - time complexity - O(n)

const nameMap = {
  Bob: 5,
  Tom: 6,
};
const tomUsages2 = nameMap["Tom"].usage; // constant time complexity - O(1)
