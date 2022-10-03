function breakfastRobot() {
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const recipesEnumeration = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  return function breakfastHandler(input) {
    const commandHandler = commands();
    const [command, option, quantity] = input.split(" ");

    return commandHandler[command](option, quantity);
  };

  function commands() {
    return {
      restock: (microelement, quantity) => {
        store[microelement] += Number(quantity);

        return "Success";
      },
      prepare: (recipe, quantity) => {
        let isDone = true;
        let error = "";
        const copyStore = JSON.parse(JSON.stringify(store));

        for (const [microelement, defQuantity] of Object.entries(
          recipesEnumeration[recipe]
        )) {
          const neededQuantity = Number(quantity) * defQuantity;

          if (store[microelement] < neededQuantity) {
            isDone = false;
            error = `Error: not enough ${microelement} in stock`;
            break;
          }

          copyStore[microelement] -= neededQuantity;
        }

        if (!isDone) {
          return error;
        }

        store = copyStore;
        return "Success";
      },
      report: () => {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
      },
    };
  }
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
