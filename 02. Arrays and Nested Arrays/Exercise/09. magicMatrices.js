function magicMatrices(matrix) {
  for (let row = 0; row < matrix.length - 1; row++) {
    let sumRowOne = matrix[row].reduce((acc, el) => acc + el);
    let sumRowTwo = matrix[row + 1].reduce((acc, el) => acc + el);
    let sumColOne = 0;
    let sumColTwo = 0;
    for (let col = 0; col < matrix.length; col++) {
      sumColOne += matrix[row][col];
      sumColTwo += matrix[row + 1][col];
    }
    if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
      return false;
    }
  }
  return true;
}

const result = magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

console.log(result);
