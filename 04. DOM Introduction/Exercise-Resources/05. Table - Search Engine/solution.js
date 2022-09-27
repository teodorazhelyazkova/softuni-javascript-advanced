function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let studentsList = Array.from(document.querySelectorAll("tbody tr"));
    let searchText = document.getElementById("searchField").value;
    searchText.innerHTML = "";

    for (const student of studentsList) {
      let text = student.textContent;
      student.classList.remove("select");

      if (text.includes(searchText)) {
        student.className = "select";
      }
    }
  }
}
