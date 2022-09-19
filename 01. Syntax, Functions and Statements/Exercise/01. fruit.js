function fruit(fruit, grams, priceKg) {
  const weightInKg = grams / 1000;
  const money = weightInKg * priceKg;
  
  console.log(
    `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
