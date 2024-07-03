let a=10
console.log(this);

function as(){
    let a=23
    console.log(a);
   
}
as()
console.log(a);
const person = {
    name: 'John',
    sayName: function () {
      console.log(this.name); // Refers to the 'person' object
    },
  };
  
  person.sayName(); // Outputs 'John'

  const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num * 2);
});