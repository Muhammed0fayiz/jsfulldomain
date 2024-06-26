var name = "hello";

const person = {
  name: 'John',
  sayName: () => {
    console.log(this.name); // 'this' does not refer to 'person'
  },
};

person.sayName(); // This will log 'hello'
