let array = [1, 2, 3, 4, 5];

logAllPairsOfArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      console.log([arr[i], arr[j]]);
    }
  }
};
logAllPairsOfArray(array);
