function carFactory(input) {
  const car = {};

  car.model = input.model;

  if (input.power <= 90) {
    car.engine = { power: 90, volume: 1800 };
  } else if (input.power > 90 && input.power <= 120) {
    car.engine = { power: 120, volume: 2400 };
  } else if (input.power > 120 && input.power <= 200) {
    car.engine = { power: 200, volume: 3500 };
  }

  car.carriage = { type: input.carriage, color: input.color };

  car.wheels = [0, 0, 0, 0];
  let size = input.wheelsize;

  if (input.wheelsize % 2 === 0) {
    size -= 1;
  }
  
  car.wheels.fill(size);

  return car;
}

let result = carFactory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});

console.log(result);
