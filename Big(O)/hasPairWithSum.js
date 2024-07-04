function hasPairWithSum(arr, sum) {
  //we use nested loop :
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //if the sum of the two numbers is equal to the sum we are looking for, return true
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  //if no pair is found, return false
  return false;
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9)); // true
console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 2)); // false
// Time complexity: O(n^2) because we are using a nested loop
// Space complexity: O(1) because we are not using any extra space
