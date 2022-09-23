function listOfNames(names) {
  names
    .sort((a, b) => a.localeCompare(b))
    .forEach((el, i) => console.log(`${i + 1}.${el}`));

  // Longer solution
  //   names.sort((a, b) => a.localeCompare(b));

  //   for (let i = 0; i < names.length; i++) {
  //     console.log(`${i + 1}.${names[i]}`);
  //   }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
