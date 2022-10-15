class Stringer {
  constructor(string, length) {
    this.initialString = string;
    this.innerString = string;
    this.innerLength = length;
  }

  increase(givenLength) {
    this.innerLength += givenLength;
  }

  decrease(givenLength) {
    this.innerLength -= givenLength;

    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    if (this.innerLength === 0) return "...";

    if (this.initialString.length > this.innerLength) {
      this.initialString =
        this.initialString.substring(0, this.innerLength) + "...";
    }

    return this.initialString;
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());
