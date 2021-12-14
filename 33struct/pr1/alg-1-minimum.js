// [5],
// BEST CAQSE: O(1)
// WORST CASE: O(n)
function getMin(numbers) {
  if (numbers.length === 0) {
    throw new Error("Should not be an emplty array!");
  }
  if (numbers.length === 1) {
    return numbers[0];
  }
  let curMin = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < curMin) {
      curMin = numbers[i];
    }
  }
  return curMin;
}
// T - linear time complexity - O(n)




// BEST CASE: [1,2,3] - O(n^2)
// WORST CASE: [3,2,1] - O(n^2)
// AVAREGE CASE: [?, ?, ?] - O(n^2)
function getMin2(numbers) {
  if (numbers.length === 0) {
    throw new Error("Should not be an emplty array!");
  }
  if (numbers.length === 1) {
    return numbers[0];
  }
  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let nextEl = numbers[j];
      if (el > nextEl) {
        numbers[i] = nextEl;
        numbers[j] = el;
        el = numbers[i];
        nextEl = numbers[j];
      }
    }
  }
  return numbers[0];
}
// T = quadratic time complexity - n*n - O(n^2)

const testNums = [10, -9, 100, -2, 99];
const min = getMin(testNums);
const min2 = getMin2(testNums);
console.log("min", min);
console.log("min2", min2);
