function calculator() {
  let selector1;
  let selector2;
  let resultSelector;

  return {
    init: (firstSelector, secondSelector, resSelector) => {
      selector1 = document.querySelector(firstSelector);
      selector2 = document.querySelector(secondSelector);
      resultSelector = document.querySelector(resSelector);
    },
    add: () => {
      const num1 = Number(selector1.value);
      const num2 = Number(selector2.value);
      const sum = num1 + num2;
      resultSelector.value = sum;
    },
    subtract: () => {
      const num1 = Number(selector1.value);
      const num2 = Number(selector2.value);
      const sum = num1 - num2;
      resultSelector.value = sum;
    },
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
