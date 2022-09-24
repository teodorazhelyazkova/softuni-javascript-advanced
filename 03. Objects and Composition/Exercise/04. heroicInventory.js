function heroicInventory(heroes) {
  const result = [];

  for (let hero of heroes) {
    let [name, level, items] = hero.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
