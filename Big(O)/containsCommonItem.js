function containsCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
containsCommonItems(["a", "b", "c", "x"], ["z", "y", "i"]); // false
containsCommonItems(["a", "b", "c", "x"], ["z", "y", "x"]); // true
// Time complexity: O(a * b) because we have two nested loops
// Space complexity: O(1) because we are not creating any new data structures
