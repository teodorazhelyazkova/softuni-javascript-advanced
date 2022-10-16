function juiceFlavors(input) {
  const produce = new Map();
  const produceInBottles = new Map();

  for (const juice of input) {
    let [juiceName, quantity] = juice.split(" => ");
    quantity = Number(quantity);

    if (!produce.has(juiceName)) {
      produce.set(juiceName, 0);
    }
    produce.set(juiceName, produce.get(juiceName) + quantity);
    
    quantity = produce.get(juiceName);

    if (quantity >= 1000) {
      const bottlesCount = Math.floor(quantity / 1000);
      produceInBottles.set(juiceName, bottlesCount);
    }
  }

  for ([flavour, quantity] of produceInBottles) {
    console.log(flavour, "=>", quantity);
  }
}
juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
