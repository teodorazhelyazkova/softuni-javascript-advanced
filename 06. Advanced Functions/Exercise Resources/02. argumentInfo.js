function argumentInfo(...arguments) {
  const result = {};
  arguments.forEach((arg) => {
    const type = typeof arg;
    console.log(`${type}: ${arg}`);

    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }

    result[type] += 1;
  });

  let buff = "";
  for (const [key, value] of Object.entries(result)) {
    buff += `${key} = ${value}\n`;
  }

  console.log(buff.trim());
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
