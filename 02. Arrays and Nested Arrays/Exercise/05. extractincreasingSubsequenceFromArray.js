function extractIncreasingSubsequenceFromArr(arr) {
  let result = [];

  let biggestNum = arr.shift();
  result.push(biggestNum);

  for (const num of arr) {
    if (num >= biggestNum) {
      result.push(num);
      biggestNum = num;
    }
  }

  return result;
  
  // Functional solution
  //  let biggestNum = arr[0];
  //   result = arr.reduce((acc,currentEl) => {
  //     if(biggestNum <= currentEl) {
  //         acc.push(currentEl);
  //         biggestNum = currentEl
  //     }
  //     return acc
  //   }, [])
}
extractIncreasingSubsequenceFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);
