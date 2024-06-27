const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
);

// sum is now 15


const l=numbers.reduce((accumulator,current)=>accumulator+current,0)
console.log(l);