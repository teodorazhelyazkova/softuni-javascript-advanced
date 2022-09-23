function cookingByNumbers(num, ...commands) {
  let number = Number(num);

  const parser = {
    chop: (number) => number / 2,
    dice: (number) => Math.sqrt(number),
    spice: (number) => number + 1,
    bake: (number) => number * 3,
    fillet: (number) => number * 0.8,
  };

  for (const command of commands) {
    number = parser[command](number);
    console.log(number);
  }

  // for (let i = 0; i < commands.length; i++) {
  //   number = manipulator(number, commands[i]);
  // }

  // commands.forEach((command) => {
  //   number = manipulator(number, command);
  // })

  // function manipulator(number, command) {
  //   switch (command) {
  //     case "chop":
  //       number /= 2;
  //       console.log(number);
  //       break;
  //     case "dice":
  //       number = Math.sqrt(number);
  //       console.log(number);
  //       break;
  //     case "spice":
  //       number += 1;
  //       console.log(number);
  //       break;
  //     case "bake":
  //       number *= 3;
  //       console.log(number);
  //       break;
  //     case "fillet":
  //       number -= number * 0.2;
  //       //   number *= 0.8;
  //       console.log(number);
  //       break;
  //   }
  //   return number;
  // }
}
// cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
