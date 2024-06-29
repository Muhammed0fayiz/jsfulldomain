// let obj={
//     greet:function(){
//         console.log(`hello ${this.name}`)
//     }
// }


// let obj1=Object.create(obj)
// obj1.name='fayiz'

// obj1.greet()



 function one() {
   this.name='fayiz'
}

function two(){
    this.name='af'
}

two.prototype=new one()

const child=new two()
console.log(child.name);