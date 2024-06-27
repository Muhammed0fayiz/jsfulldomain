// function hyorder(a,b,operator){
//     return operator(a,b)
// }

// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }

// console.log(hyorder(3,4,add));
console.log('helo');

setTimeout(() => {
    console.log('one');
    setTimeout(() => {
        console.log('two');
        setTimeout(() => {
            console.log('3');
        }, 4000);
    }, 2000);
}, 2000);