class List {
  constructor() {
    this.numbers = [];
    this.size = this.numbers.length;
  }

  add(element) {
    this.numbers.push(element);
    this.size++;
    return this.numbers.sort((a, b) => a - b);
  }

  remove(index) {
    if (this.numbers[index] !== undefined) {
      this.size--;
      return this.numbers.splice(index, 1);
    }
  }

  get(index) {
    if (this.numbers[index] !== undefined) {
      return this.numbers[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
