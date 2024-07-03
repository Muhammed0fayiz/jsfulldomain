const a=[1,23,4,5]



const b=a.concat(33,4)
console.log(b);

a.forEach(elem => {
    console.log(elem*2);
});

const newone=a.map(item=>
    item*2
)
console.log('map',newone);
// const newone = a.map(item => item * 2);
// console.log('map', newone);
const ll=a.forEach(item=>item*2)
console.log(ll);