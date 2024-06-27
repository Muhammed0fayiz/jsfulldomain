// Creating an object
let obj = {
    property1: 42,
    property2: 'hello'
  };
  
  // Sealing the object
  Object.seal(obj);
  
  // Trying to add a new property (will have no effect in strict mode)
  obj.property3 = true;
  
  // Trying to delete an existing property (will have no effect)
  delete obj.property1;
  
  // Modifying an existing property (allowed if writable)
  obj.property1 = 99;
  
  // Outputting the modified object
  console.log(obj);

console.log('exaple..............');

  const ex={
    name:'fayiz',
    age:23
  }

  Object.freeze(ex)
  delete ex.age;
  ex.p=9;
  ex.name='jjjj'
  console.log(ex);



  const ob={
    name:'hari',
    age:32
  }
  Object.seal(ob)

  ob.name='fayiiii'
  ob.add=34

  console.log('seal');

  console.log(ob);



  // Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Accessing object properties
  console.log(person.firstName); // Output: "John"
  console.log(person.lastName); // Output: "Doe"
  
  // Calling an object method
  console.log(person.fullName()); // Output: "John Doe"