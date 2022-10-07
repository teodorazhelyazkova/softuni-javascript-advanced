function add(number) {
  let sum = 0;

  function innerSum(num) {
    sum += num;
    return innerSum;
  }

  innerSum.toString = () => {
    return sum;
  };

  return innerSum(number);
}

let result = add(1)(6)(-3);

console.log(Number(result))