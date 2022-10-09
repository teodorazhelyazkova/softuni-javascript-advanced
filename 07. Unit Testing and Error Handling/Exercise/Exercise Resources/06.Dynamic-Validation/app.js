function validate() {
  const inputField = document.getElementById("email");
  inputField.addEventListener("change", onChange);

  function onChange(e) {
    const email = e.target.value;
    const emailPattern = /[A-Za-z0_9]+@[A-Za-z0_9]+\.[A-Za-z0_9]+/g;

    if (emailPattern.test(email)) {
      e.target.classList.remove("error");
    } else {
      e.target.classList.add("error");
    }
  }
}
