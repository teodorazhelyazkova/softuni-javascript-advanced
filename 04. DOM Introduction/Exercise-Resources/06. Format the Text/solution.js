function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let arrText = input.split(".").filter(x=> x.length > 0);
  output.innerHTML = "";

  for (let i = 0; i < arrText.length; i += 3) {
    let paragraphs = [];

    for (let x = 0; x < 3; x++) {
      if (arrText[i + x]) {
        paragraphs.push(arrText[i + x]);
      }
    }

    let result = paragraphs.join(". ") + ".";
    output.innerHTML += `<p>${result}</p>`;
  }
}
