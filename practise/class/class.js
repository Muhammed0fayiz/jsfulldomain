// Define a simple class named 'Person'
class Person {
    // Constructor method to initialize the object
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display the person's details
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create an instance of the Person class
  const person1 = new Person('Alice', 30);
  
  // Call the method
  person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
  