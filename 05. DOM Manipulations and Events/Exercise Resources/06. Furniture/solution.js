function solve() {
  const buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate() {
    const input = JSON.parse(document.querySelectorAll("textarea")[0].value);
    const tableBody = document.getElementsByTagName("tbody")[0];

    for (let item of input) {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td><img src=${item.img}></td><td><p>${item.name}</p></td><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></td><td><input type="checkbox"></td>`;
      tableBody.appendChild(tableRow);
    }
  }

  function buy() {
    const output = document.querySelectorAll("textarea")[1];
    const tableRows = Array.from(document.querySelectorAll("tbody tr"));
    const result = {
      name: [],
      price: 0,
      decFactor: 0,
    };

    for (const row of tableRows) {
      if (row.querySelector("input[type=checkbox]:checked")) {
        const rowData = Array.from(row.querySelectorAll("td p"));

        result.name.push(rowData[0].textContent);
        result.price += Number(rowData[1].textContent);
        result.decFactor += Number(rowData[2].textContent);
      }
    }

    output.value = `Bought furniture: ${result.name.join(
      ", "
    )}\nTotal price: ${result.price.toFixed(2)}\nAverage decoration factor: ${
      result.decFactor / result.name.length
    }`;
  }
}
