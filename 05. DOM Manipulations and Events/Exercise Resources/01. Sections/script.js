function create(words) {
  for (const word of words) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = word;
    p.style.display = "none";
    div.appendChild(p);
    div.addEventListener("click", showP);
    document.getElementById("content").appendChild(div);
  }

  function showP(event) {
    if (event.target.nodeName === "P") {
      return;
    }
    const p = event.target.children[0];
    p.style.display = "block";
  }
}
