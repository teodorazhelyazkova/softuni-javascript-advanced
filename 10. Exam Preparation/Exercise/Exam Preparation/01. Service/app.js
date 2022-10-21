window.addEventListener("load", solve);

function solve() {
  document.querySelector("form button").addEventListener("click", createTask);

  const productType = document.getElementById("type-product");
  const description = document.getElementById("description");
  const name = document.getElementById("client-name");
  const phone = document.getElementById("client-phone");
  const receiveSection = document.getElementById("received-orders");
  const finishSection = document.getElementById("completed-orders");
  const clearBtn = finishSection.querySelector("button");
  clearBtn.addEventListener("click", clearTask);

  function createTask(e) {
    e.preventDefault();

    const typeValue = productType.value;
    const descriptionValue = description.value;
    const nameValue = name.value;
    const phoneValue = phone.value;

    if (descriptionValue === "" || nameValue === "" || phoneValue === "") {
      return;
    }

    createOrder(typeValue, descriptionValue, nameValue, phoneValue);

    description.value = "";
    name.value = "";
    phone.value = "";
  }

  function createOrder(typeValue, descriptionValue, nameValue, phoneValue) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");

    const h2 = document.createElement("h2");
    h2.textContent = `Product type for repair: ${typeValue}`;

    const h3 = document.createElement("h3");
    h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;

    const h4 = document.createElement("h4");
    h4.textContent = `Description of the problem: ${descriptionValue}`;

    const startBtn = document.createElement("button");
    startBtn.classList.add("start-btn");
    startBtn.textContent = "Start repair";
    startBtn.addEventListener("click", startRepair);

    const finishBtn = document.createElement("button");
    finishBtn.classList.add("finish-btn");
    finishBtn.setAttribute("disabled", true);
    finishBtn.textContent = "Finish repair";
    finishBtn.addEventListener("click", finishTask);

    divContainer.appendChild(h2);
    divContainer.appendChild(h3);
    divContainer.appendChild(h4);
    divContainer.appendChild(startBtn);
    divContainer.appendChild(finishBtn);
    receiveSection.appendChild(divContainer);
  }

  function startRepair(e) {
    e.target.setAttribute("disabled", true);

    const finishBtn =
      e.target.parentElement.getElementsByClassName("finish-btn")[0];
    finishBtn.disabled = false;
  }

  function finishTask(e) {
    const divContainer = e.target.parentElement;
    finishSection.appendChild(divContainer);
    const btns = divContainer.querySelectorAll("button");
    btns[0].remove();
    btns[1].remove();
    debugger;
  }

  function clearTask(e) {
    const containers = finishSection.querySelectorAll(".container");

    Array.from(containers).forEach((container) => container.remove());
  }
}
