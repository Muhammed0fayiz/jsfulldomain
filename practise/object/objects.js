const person = {
    name: 'Fayiz',
    age: 32,
    l:2
};

console.log(Object.values(person));  // Output: ['Fayiz', 32]


const o=Object.keys(person).length===3;
console.log(o);


const obj = {
    prop: 42
  };
  Object.freeze(obj);
  obj.prop = 33; // Throws an error in strict mode
  console.log(obj.prop); // 42
  


 