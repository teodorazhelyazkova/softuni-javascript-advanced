function autoEngineeringCompany(input) {
  const cars = {};

  for (let car of input) {
    let [brand, model, quantity] = car.split(" | ");
    quantity = Number(quantity);

    if (!cars.hasOwnProperty(brand)) {
      cars[brand] = {};
    }

    if (cars[brand][model] === undefined) {
      cars[brand][model] = quantity;
    } else {
      cars[brand][model] += quantity;
    }
  }

  for (let [brand, brandProduce] of Object.entries(cars)) {
    console.log(brand);
    for (let [model, quantity] of Object.entries(brandProduce)) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}
autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
