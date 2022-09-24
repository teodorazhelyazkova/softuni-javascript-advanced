function lowestPricesInCities(towns) {
  const result = {};

  for (const townData of towns) {
    let [town, product, price] = townData.split(" | ");
    price = Number(price);

    if (result.hasOwnProperty(product)) {
      let currentPrice = result[product]["price"];

      if (currentPrice > price) {
        result[product] = { town, price };
      }
    } else {
      result[product] = { town, price };
    }
  }

  for (const [product, value] of Object.entries(result)) {
    console.log(`${product} -> ${value.price} (${value.town})`);
  }
}
lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
