function countCharOccurence(str) {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (!isAlphaNumeric(char)) continue;
    result[char] = ++result[char] || 1;
  }
  return result;
}

function isAlphaNumeric(char) {
  const charCode = char.charCodeAt(0);
  return (
    (charCode > 47 && charCode < 58) ||
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123)
  );
}

console.log(countCharOccurence("hello world!")); //{ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
