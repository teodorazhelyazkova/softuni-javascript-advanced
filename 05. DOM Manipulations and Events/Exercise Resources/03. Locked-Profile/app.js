function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));

  for (const button of buttons) {
    button.addEventListener("click", buttonHandler);
  }

  function buttonHandler(e) {
    const locked = e.target.parentElement.querySelector(
      "input[value=lock]:checked"
    );

    if (!!locked) return;

    const hiddenInfoElement = e.target.parentElement.querySelector("div");
    const actionBtn = e.target.parentElement.querySelector("button");

    const isShowMoreBtn = actionBtn.textContent === "Show more";
    hiddenInfoElement.style.display = isShowMoreBtn ? "block" : "none";
    actionBtn.textContent = isShowMoreBtn ? "Hide it" : "Show more";
  }
}
