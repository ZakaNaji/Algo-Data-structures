function arrayOfHiNTimes(n) {
  return Array.from({ length: n }, function () {
    return "hi";
  });
}

arrayOfHiNTimes(6); // ['hi', 'hi', 'hi', 'hi', 'hi', 'hi']
// Time complexity: O(n) because we are creating an array of length n
// Space complexity: O(n) because we are creating an array of length n
