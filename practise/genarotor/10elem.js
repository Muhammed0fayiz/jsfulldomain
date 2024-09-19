function* generotor(limit){
    let num = 0;
    while(num < limit){
        if(num % 2 === 1){
            yield num;
        }
        num++;
    }
}

let gr = generotor(10);  // Assuming you want the limit to be 10
console.log(gr.next().value);  // This will print the first odd number
