function sameNumbers(num) {
  let numStr = num.toString();
  let firstDigit = numStr[0];
  let isSame = true;
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    if (firstDigit !== numStr[i]) {
      isSame = false;
    }
    sum += Number(numStr[i]);
  }
  
  console.log(isSame);
  console.log(sum);
}
sameNumbers(2222222);
