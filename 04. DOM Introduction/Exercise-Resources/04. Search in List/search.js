function search() {
  let townList = Array.from(document.querySelectorAll("ul li"));
  let searchText = document.getElementById("searchText").value;
  let countMatches = 0;

  for (const item of townList) {
    let text = item.textContent;

    if (text.includes(searchText)) {
      item.style.textDecoration = "underline";
      item.style.fontWeight = "bold";
      countMatches++;
    } else {
      item.style.textDecoration = "none";
      item.style.fontWeight = "normal";
    }
  }

  document.getElementById("result").innerText = `${countMatches} matches found`;
}
