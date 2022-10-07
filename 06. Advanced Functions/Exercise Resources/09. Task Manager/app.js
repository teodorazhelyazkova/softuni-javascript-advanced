function solve() {
  document
    .getElementsByTagName("form")[0]
    .addEventListener("submit", createTask);

  const sections = Array.from(document.getElementsByTagName("section"));
  const openSection = sections[1];
  const inProgressSection = sections[2];
  const completeSection = sections[3];

  function createTask(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.elements[0].value;
    const description = form.elements[1].value;
    const date = form.elements[2].value;

    if (title.length === 0 || description.length === 0 || date.length === 0) {
      return;
    }

    const newArticle = createPartialArticle(
      title,
      description,
      date,
      { class: "green", text: "Start" },
      { class: "red", text: "Delete" }
    );

    openSection.children[1].appendChild(newArticle);
    updateEventListener();
  }

  function updateEventListener() {
    Array.from(document.getElementsByTagName("button")).forEach((button) =>
      button.addEventListener("click", dispatchHandler)
    );
  }

  function createPartialArticle(
    title,
    description,
    date,
    firstBtnInfo,
    secondBtnInfo
  ) {
    const buttons = createPartialButton(firstBtnInfo, secondBtnInfo);
    const article = document.createElement("article");

    const innerHTML =
      `<h3>${title}</h3>` +
      `<p>Description: ${description}</p>` +
      `<p>Due Date: ${date}</p>` +
      buttons;

    article.innerHTML = innerHTML;
    // article.addEventListener("click", dispatchHandler);

    return article;
  }

  function createPartialButton(firstBtnInfo, secondBtnInfo) {
    const buttons =
      `<div class="flex">` +
      `<button class="${firstBtnInfo.class}">${firstBtnInfo.text}</button>` +
      `<button class="${secondBtnInfo.class}">${secondBtnInfo.text}</button>` +
      `</div>`;

    return buttons;
  }

  function dispatchHandler(e) {
    if (e.target.innerText === "Add") {
      return;
    }
    const commandObj = commands(e);
    const type = e.target.innerText.toLowerCase();

    commandObj[type](e);
  }

  function commands(e) {
    const article = e.target.parentElement.parentElement;

    return {
      start: function (e) {
        inProgressSection.children[1].appendChild(article);
        e.target.parentElement.remove();
        article.innerHTML += createPartialButton(
          { class: "red", text: "Delete" },
          { class: "orange", text: "Finish" }
        );
        updateEventListener();
      },
      delete: function (e) {
        article.remove();
      },
      finish: function (e) {
        completeSection.children[1].appendChild(article);
        e.target.parentElement.remove();
      },
    };
  }
}
