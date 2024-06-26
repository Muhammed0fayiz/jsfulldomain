// const person = {
//     name: 'John',
//     sayName: function () {
//       console.log(this.name); // Refers to the 'person' object
//     },
//   };
   
//   person.sayName(); // Outputs 'John'

// console.log(this);
var name = "hello"

const person = {
  name: 'John',
  hello: 
  ()=>{
    console.log(this);
  },
  sayName: ()=> {
    console.log(this);
    console.log(this.name); // Refers to the 'person' object
  },
};

person.sayName();
person.hello();
console.log('hellllllllllllllll');
 // Outputs 'John'
 





