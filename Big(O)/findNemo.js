let bigArray = new Array(100000).fill("nemo");

let findNemo = (arr) => {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
  let t1 = performance.now();
  console.log("time to find nemo: ", t1 - t0);
};

findNemo(bigArray);
