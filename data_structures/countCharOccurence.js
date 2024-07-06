function countCharOccurence(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === " ") continue;
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(countCharOccurence("hello world")); //{ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
