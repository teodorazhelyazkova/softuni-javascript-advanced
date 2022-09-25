function townsToJSON(arr) {
  const [headers, ...elements] = arr.map((el) =>
    el.slice(2, el.length - 2).split(" | ")
  );

  const towns = elements.map(townData => {
    return {
     [headers[0]]: townData[0],
     [headers[1]]: +Number(townData[1]).toFixed(2),
     [headers[2]]: +Number(townData[2]).toFixed(2),
    }
  })
  console.log(JSON.stringify(towns));
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
