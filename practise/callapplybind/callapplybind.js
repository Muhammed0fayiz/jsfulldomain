let obj={
    firstname:'muhammed',
    lastname:'fayiz',
    fullname:function(){
        console.log(this.firstname+' '+this.lastname);
    }
}



obj.fullname()

let obj2={
    firstname:'anad', 
    lastname:'muhammed',
}


obj.fullname.call(obj2)

let a=3;
console.log(typeof a);