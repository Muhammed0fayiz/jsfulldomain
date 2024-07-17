function * generotor(limit){
    let num=0
    while(num<limit){
        if(num%2===0){
            yield num;
        }
        num=num+1
    }
}

for(even of generotor(10)){
    console.log(even);
}