function rotateArray(arr, num) {
  let rotations = 0;
  while (rotations < num) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
    rotations++;
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
