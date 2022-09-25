function storeCatalogue(arr) {
  const catalogue = {};

  for (const data of arr) {
    let [name, price] = data.split(" : ");
    price = Number(price);

    catalogue[name] = price;
  }

  const sortedCatalogue = Object.entries(catalogue).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let previousChar = "";
  for (const [name, price] of sortedCatalogue) {
    let firstChar = name[0];
    if (firstChar !== previousChar) {
      previousChar = firstChar;
      console.log(firstChar);
    }
    console.log(`  ${name}: ${price}`);
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
