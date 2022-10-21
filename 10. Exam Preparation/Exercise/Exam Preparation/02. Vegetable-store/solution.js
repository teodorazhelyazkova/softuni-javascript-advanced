class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    vegetables.forEach((product) => {
      let [type, quantity, price] = product.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      const currentProduct = this.availableProducts.find(
        (product) => product.type === type
      );

      if (!currentProduct) {
        this.availableProducts.push({
          type,
          quantity,
          price,
        });
      } else {
        currentProduct.quantity += quantity;
        if (currentProduct.price < price) {
          currentProduct.price = price;
        }
      }
    });

    let result = [];
    this.availableProducts.forEach((product) => result.push(product.type));

    return `Successfully added ${result.join(", ")}`;
  }

  buyingVegetables(selectedProdcuts) {
    let totalPrice = 0;
    selectedProdcuts.forEach((product) => {
      let [type, quantity] = product.split(" ");
      quantity = Number(quantity);

      const currentProduct = this.availableProducts.find(
        (product) => product.type === type
      );

      if (!currentProduct) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      if (quantity > currentProduct.quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      totalPrice += quantity * currentProduct.price;
      currentProduct.quantity -= quantity;
    });
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    const currentProduct = this.availableProducts.find(
      (product) => product.type === type
    );

    if (!currentProduct) {
      throw new Error(`${type} is not available in the store.`);
    }

    currentProduct.quantity -= quantity;
    if (currentProduct.quantity < 0) {
      currentProduct.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    let result = `Available vegetables:\n`;
    this.availableProducts
      .sort((a, b) => a.price - b.price)
      .forEach(
        (product) =>
          (result += `${product.type}-${product.quantity}-$${product.price}\n`)
      );
    result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return result;
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
