function generateReport() {
  const tableHeaders = document.querySelectorAll("thead tr th");
  const tableRows = document.querySelectorAll("tbody tr");
  const result = [];

  for (let row = 0; row < tableRows.length; row++) {
    const rowCells = tableRows[row].cells;
    const tempRowCells = {};

    for (let cell = 0; cell < rowCells.length; cell++) {
      const currentHeaders = tableHeaders[cell].childNodes;

      if (currentHeaders[1].checked === true) {
        tempRowCells[currentHeaders[0].textContent.trim().toLocaleLowerCase()] =
          rowCells[cell].textContent;
          debugger
      }
    }
    result.push(tempRowCells);
  }
  const jsonResult = JSON.stringify(result);
  document.getElementById("output").textContent = jsonResult;
}
