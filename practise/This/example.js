function fact(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`hello ${this.name}`);
        }
    };
}

let a = fact('ss', 2);
a.greet(); // Output: hello ss
