function notify(message) {
  const notificationElement = document.getElementById("notification");
  notificationElement.innerText = message;

  notificationElement.style.display = "block";

  notificationElement.addEventListener("click", toggleDisplayStyle);

  function toggleDisplayStyle(e) {
    e.target.style.display = "none";
  }
}
