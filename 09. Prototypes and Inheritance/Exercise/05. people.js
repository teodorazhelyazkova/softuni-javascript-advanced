function people() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
      this.dividend = 0;
    }

    work() {
      console.log(this.tasks[0]);
      this.tasks.push(this.tasks.shift());
    }

    collectSalary() {
      console.log(`${this.name} received ${this.salary} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);

      let tasksList = [`${this.name} is working on a simple task.`];
      super.tasks = tasksList;
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);

      let tasksList = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`,
      ];
      super.tasks = tasksList;
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);

      let tasksList = [
        `${this.name} scheduled a meeting.`,
        `${this.name} is preparing a quarterly report.`,
      ];
      super.tasks = tasksList;
      this.dividend = 0;
    }
    collectSalary() {
      console.log(
        `${this.name} received ${this.salary + this.dividend} this month.`
      );
    }
  }

  return { Employee, Junior, Senior, Manager };
}

const classes = people();
const junior = new classes.Junior("Ivan", 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const senior = new classes.Senior("Alex", 31);

senior.work();
senior.work();
senior.work();
senior.work();

senior.salary = 12050;
senior.collectSalary();

const manager = new classes.Manager("Tom", 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
