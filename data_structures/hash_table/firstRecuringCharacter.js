function firstRecuringCharacter(arr, char) {
  const map = new Map();
  for (let c of arr) {
    if (map.get(c)) {
      return c;
    } else {
      map.set(c, true);
    }
  }
  return undefined;
}

console.log(firstRecuringCharacter([2, 5, 4, 6, 5, 7, 5, 6]));
