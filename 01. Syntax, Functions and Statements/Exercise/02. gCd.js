function gCd(num1, num2) {
  let greatestCommonDivisor = 0;

  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      greatestCommonDivisor = i;
    }
  }
  console.log(greatestCommonDivisor);
}
gCd(15, 5);
