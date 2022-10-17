function extensibleObject() {
  return {
    extend(template) {
      for (let property in template) {
        if (typeof template[property] === "function") {
          Object.getPrototypeOf(this)[property] = template[property];
        } else {
          this[property] = template[property];
        }
      }
    },
  };
}

const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};

myObj.extend(template);
console.log(myObj)