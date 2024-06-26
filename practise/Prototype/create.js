let obj={
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}


let obj1=Object.create(obj)
obj1.name='fayiz'

obj1.greet()