function sortingNumbers(arr) {
  const sortArr = [...arr.sort((a, b) => a - b)];
  const result = [];

  for (let i = 0; i < sortArr.length / 2; i++) {
    const minNum = sortArr[i];
    const maxNum = sortArr[sortArr.length - 1 - i];

    result.push(minNum);

    if (minNum !== maxNum) {
      result.push(maxNum);
    }
  }
  return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 63, 31, -3, 18, 56]));
