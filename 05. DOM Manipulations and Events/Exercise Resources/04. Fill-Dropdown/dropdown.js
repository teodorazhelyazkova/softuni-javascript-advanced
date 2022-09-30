function addItem() {
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");
  const menu = document.getElementById("menu");

  const newOption = document.createElement("option");
  newOption.textContent = newItemText.value;
  newOption.value = newItemValue.value;

  menu.appendChild(newOption);

  newItemText.value = "";
  newItemValue.value = "";
}
