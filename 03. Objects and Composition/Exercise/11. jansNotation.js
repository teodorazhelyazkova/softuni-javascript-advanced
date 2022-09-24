function jansNotation(arr) {
  const result = [];
  const number = [];
  const operators = [];

  const operationEnumeration = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  for (const el of arr) {
    if (typeof el === "number") {
      number.push(el);
    } else {
      operators.push(el);
    }
  }

  if (operators.length < number.length - 1) {
    console.log("Error: too many operands!");
    return;
  } else if (number.length === operators.length || number.length === 0) {
    console.log("Error: not enough operands!");
    return;
  }

  for (const el of arr) {
    if (typeof el === "number") {
      result.push(el);
      continue;
    }

    const numA = result.pop();
    const numB = result.pop();
    const res = operationEnumeration[el](numB, numA);
    result.push(res);
  }
    console.log(result.join());
}
jansNotation([3, 4, "+"]);
