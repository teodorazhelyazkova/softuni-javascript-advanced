function attachEventsListeners() {
  const buttons = Array.from(document.querySelectorAll("input[type=button]"));

  for (const button of buttons) {
    button.addEventListener("click", convert);
  }

  function convert(e) {
    const value = Number(
      e.target.parentElement.querySelector("input[type=text]").value
    );
    const unit = e.target.id;

    switch (unit) {
      case "daysBtn":
        propagate(value);
        break;
      case "hoursBtn":
        propagate(value / 24);
        break;
      case "minutesBtn":
        propagate(value / 24 / 60);
        break;
      case "secondsBtn":
        propagate(value / 24 / 60 / 60);
        break;
    }
  }

  function propagate(valueInDays) {
    const inputs = Array.from(document.querySelectorAll("input[type=text]"));
    inputs.shift().value = valueInDays; 
    let hours = valueInDays * 24;

    for (const input of inputs) {
      input.value = hours;
      hours *= 60;
    }
  }
}
