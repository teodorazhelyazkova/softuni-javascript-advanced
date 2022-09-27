function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let result = [];

  function onClick() {
    let input = JSON.parse(document.getElementById("inputs").children[1].value);
    let theBestRestaurantInfo = document.querySelector("#bestRestaurant p");
    let theBestRestaurantWorkers = document.querySelector("#workers p");

    for (let data of input) {
      let [name, workerList] = data.split(" - ");
      workerList = workerList && workerList.split(", ");

      if (!result.find((el) => el.name === name)) {
        result.push({
          name,
          avgSalary: 0,
          bestSalary: 0,
          sumSalary: 0,
          workerList: [],
        });
      }
      let currentRestaurant = result.find((el) => el.name === name);

      for (let worker of workerList) {
        updateRestaurant(currentRestaurant, worker);
      }
    }

    let theBestRestaurant = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];

    theBestRestaurantInfo.textContent = `Name: ${
      theBestRestaurant.name
    } Average Salary: ${theBestRestaurant.avgSalary.toFixed(
      2
    )} Best Salary: ${theBestRestaurant.bestSalary.toFixed(2)}`;

    let sortListOfWorkers = theBestRestaurant.workerList.sort(
      (a, b) => b.salary - a.salary
    );

    let buff = "";
    for (let worker of sortListOfWorkers) {
      buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
    }

    theBestRestaurantWorkers.textContent = buff;
  }

  function updateRestaurant(obj, worker) {
    let [name, salary] = worker.split(" ");
    salary = Number(salary);

    obj.sumSalary += Number(salary);

    if (obj.bestSalary < salary) {
      obj.bestSalary = salary;
    }

    obj.workerList.push({
      name,
      salary,
    });

    obj.avgSalary = obj.sumSalary / obj.workerList.length;
  }
}
