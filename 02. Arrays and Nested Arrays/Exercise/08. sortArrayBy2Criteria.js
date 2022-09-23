function sortArrayBy2Criteria(arr) {
  let sortArr = arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
  console.log(sortArr.join("\n"));

  // Functional solution
  // return arr
  //   .sort((a, b) => {
  //     return a.length - b.length || a.localeCompare(b);
  //   })
  //   .join("\n");
}
sortArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
