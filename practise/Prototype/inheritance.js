let object={
    name:'fayiz',
    city:'ktk'
}

let obj2={
    name:'hari'
}

obj2.__proto__=object

console.log(obj2.name)

console.log(obj2.city)