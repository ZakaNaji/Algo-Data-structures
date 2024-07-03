function containsCommonItems(arr1, arr2) {
  //lets 1st create a map of the first array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // lets loop through the second array and check if the item is in the map
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(containsCommonItems(["a", "b", "c", "x"], ["z", "y", "i"])); // false
console.log(containsCommonItems(["a", "b", "c", "x"], ["z", "y", "x"])); // true
// Time complexity: O(n + m) because we are looping through both arrays separately
// Space complexity: O(n) because we are creating a map of the first array
