class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log("I am class Person, My name is " + this.name);
  }
}

export default Person;
