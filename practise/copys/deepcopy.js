// Original object with a nested array
const original = { numbers: [1, 2, 3] };

// Creating a shallow copy using spread operator
const shallowCopy = { ...original };

// Modifying the nested array in the copied object
shallowCopy.numbers.push(4);

console.log(original.numbers); // Output: [1, 2, 3, 4]




const org={num:[1,2,4]}
const deep=JSON.parse(JSON.stringify(org))
deep.num.push(34)
console.log(org.num);
console.log(deep.num);