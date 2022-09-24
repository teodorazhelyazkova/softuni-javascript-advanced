function calorieObject(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i += 2) {
    const food = arr[i];
    const calories = Number(arr[i + 1]);
    result[food] = calories;
  }
  console.log(result);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
