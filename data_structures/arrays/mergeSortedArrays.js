const mergeSortedArrays = (arr1, arr2) => {
  const length = arr1.length + arr2.length;
  const mergedArray = [];
  let i = 0;
  let j = 0;
  for (let k = 0; k < length; k++) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      mergedArray[k] = arr1[i];
      i++;
    } else {
      mergedArray[k] = arr2[j];
      j++;
    }
  }
  return mergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
