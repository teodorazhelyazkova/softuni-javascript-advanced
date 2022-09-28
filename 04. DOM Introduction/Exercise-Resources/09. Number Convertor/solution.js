function solve() {
  const numberSystem = document.querySelector("#selectMenuTo");
  document
    .querySelector("#container button")
    .addEventListener("click", convert);

  function init() {
    const optionBinary = document.createElement("option");
    optionBinary.value = "binary";
    optionBinary.textContent = "Binary";

    const optionHexadecimal = document.createElement("option");
    optionHexadecimal.value = "hexadecimal";
    optionHexadecimal.textContent = "Hexadecimal";

    numberSystem.appendChild(optionHexadecimal);
    numberSystem.appendChild(optionBinary);
  }
  init();

  function convert() {
    const number = Number(document.getElementById("input").value);

    let result = document.getElementById("result");

    if (numberSystem.value === "binary") {
      result.value = number.toString(2);
    } else {
      result.value = number.toString(16).toUpperCase();
    }
  }
}
