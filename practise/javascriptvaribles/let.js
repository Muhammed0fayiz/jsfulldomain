// function example() {
//     let x = 10;
//     if (true) {
//       let x = 20; // This creates a new 'x' in the block scope
//     }
//     console.log(x); // Outputs 10
//   }
// example()



// let a=10;
// a=20;
// console.log(a)

function example() {
    let x = 1;
    if (true) {
        let y = 2;
        console.log(x); // 1 (accessible because 'x' is in the outer block)
    }
    console.log(x); // 1
 
}
example();
