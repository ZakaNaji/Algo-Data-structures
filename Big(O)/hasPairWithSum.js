function hasPairWithSum(arr, sum) {
  let comp = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (comp.has(arr[i])) {
      return true;
    }
    comp.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9)); // true
console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 2)); // false
