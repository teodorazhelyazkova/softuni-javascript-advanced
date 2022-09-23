function printEveryNthElementFromArray(arr, step) {
  let result = [];
  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  return result;

  // Functional solution
  // return arr.filter((el, i) => {
  //   if (i % step === 0) {
  //     return el;
  //   }
  // });
}
printEveryNthElementFromArray(["5", "20", "31", "4", "20"], 2);
