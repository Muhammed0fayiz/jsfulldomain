const person = {
    name: 'Fayiz',
    age: 32,
    l:2
};

console.log(Object.values(person));  // Output: ['Fayiz', 32]


const o=Object.keys(person).length===3;
console.log(o);


const obj = {
    prop: 42,
    age:23
  };
  Object.freeze(obj);
  obj.prop = 33; // Throws an error in strict mode
  console.log(obj.prop); // 42
  delete obj.age;
  console.log(obj);



  const objs = {
    prop: 42,
    age: 23
};

Object.seal(objs);

delete objs.age; // This will fail because the object is sealed
objs.age = 3333; // This will succeed because sealed properties can still be written to
objs.r = 90; // This will fail because the object is sealed and new properties cannot be added

console.log(objs.r);

