function ticketDatabase(ticketDescriptions, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  
  const result = ticketDescriptions.map((ticket) => {
    const [destination, price, status] = ticket.split("|");
    return {
      destination,
      price,
      status,
    };
  });

  result.sort((a, b) => {
    let isNumber = criteria === "price";
    return isNumber
      ? a[criteria] - b[criteria]
      : a[criteria].localeCompare(b[criteria]);
  });

  return result.map((el) => new Ticket(el.destination, el.price, el.status));
}

ticketDatabase(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "price"
);
