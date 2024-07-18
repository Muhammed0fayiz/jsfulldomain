const people = [
    { name: "Alice", hobbies: ["reading", "hiking"] },
    { name: "Bob", hobbies: ["cooking"] },
    { name: "Charlie", hobbies: ["gaming", "coding"] }
];

let a = people.map(item => item.hobbies);
console.log(a);
