function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  const currentCase = document.getElementById("naming-convention").value;
  let textArray = text.split(" ");
  let result = "";

  switch (currentCase) {
    case "Camel Case":
      textArray.forEach((el, i) => {
        if (i === 0) {
          return (result += el);
        }
        return (result += el[0].toUpperCase() + el.substring(1));
      });
      break;
    case "Pascal Case":
      textArray.forEach((el, i) => {
        return (result += el[0].toUpperCase() + el.substring(1));
      });
      break;
    default:
      result = "Error!";
      break;
  }
  document.getElementById("result").textContent = result;
}
