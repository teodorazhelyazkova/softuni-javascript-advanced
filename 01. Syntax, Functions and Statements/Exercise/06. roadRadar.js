function roadRadar(speed, area) {
  const regulations = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  if (speed > regulations[area]) {
    const difference = speed - regulations[area];
    const status =
      difference > 40
        ? "reckless driving"
        : difference > 20 && difference <= 40
        ? "excessive speeding"
        : "speeding";

    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${regulations[area]} - ${status}`
    );
  } else {
    console.log(`Driving ${speed} km/h in a ${regulations[area]} zone`);
  }
}

roadRadar(40, "city");
roadRadar(120, 'interstate');
