function addAndRemoveElements(commands) {
  let initialNumber = 1;
  let result = [];

  commands.forEach((command) => {
    command === "add" ? result.push(initialNumber) : result.pop();
    // switch (command) {
    //   case "add":
    //     result.push(initialNumber);
    //     break;
    //   case "remove":
    //     result.pop();
    //     break;
    // }
    initialNumber++;
  });

  return result.length === 0 ? "Empty" : result.join("\n");

  //   if (result.length === 0) {
  //     console.log("Empty");
  //   } else {
  //     console.log(result.join("\n"));
  //   }
}
addAndRemoveElements(["remove", "remove", "remove"]);
