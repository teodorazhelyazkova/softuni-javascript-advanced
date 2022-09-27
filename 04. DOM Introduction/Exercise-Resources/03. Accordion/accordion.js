function toggle() {
  let buttonText = document.getElementsByClassName("button")[0];
  let isDisplaying = document.querySelector("#extra");

  if (
    isDisplaying.style.display === "none" ||
    isDisplaying.style.display === ""
  ) {
    isDisplaying.style.display = "block";
    buttonText.textContent = "Less";
  } else if (isDisplaying.style.display === "block") {
    isDisplaying.style.display = "none";
    buttonText.textContent = "More";
  }
  debugger;
}
