var name = "hello";

const person = {
  name: 'John',
  sayName: () => {
    console.log(this.name); // 'this' does not refer to 'person'
  },
};

person.sayName(); // This will log 'hello'


let obj={
  great:function(){
console.log(`hello ${this.name}`);
  }
}
let obj1=Object.create(obj)
obj1.name='fayiz'
obj1.great()

function ba(){
    this.basic='iam basic'
}

function ma(){
  this.pro='i an pro'
}

ma.prototype=new ba()
const child=new ma()

console.log(child.basic);