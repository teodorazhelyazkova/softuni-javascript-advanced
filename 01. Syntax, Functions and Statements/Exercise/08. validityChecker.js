function validityChecker(x1, y1, x2, y2) {
  function checker(a1, b1, a2, b2) {
    return Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
  }

  const res1 = Number.isInteger(checker(x1, y1, 0, 0));
  const res2 = Number.isInteger(checker(x2, y2, 0, 0));
  const res3 = Number.isInteger(checker(x1, y1, x2, y2));

  const distances = [res1, res2, res3];
  const points = [
    { x1: x1, y1: y1, x2: 0, y2: 0 },
    { x1: x2, y1: y2, x2: 0, y2: 0 },
    { x1: x1, y1: y1, x2: x2, y2: y2 },
  ];

  distances.forEach((dist, index) => {
    console.log(
      `{${points[index].x1}, ${points[index].y1}} to {${points[index].x2}, ${
        points[index].y2
      }} is ${dist ? "valid" : "invalid"}`
    );
  });
}

// validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
