function firstFunction(callback){
    setTimeout(() => {
        console.log('one');
        callback()
    }, 1000);

}
function secFunction(callback){
    setTimeout(() => {
        console.log('two0');
        callback()
    }, 1000);
   
}
function thirdstFunction(callback){
    setTimeout(() => {
        console.log('othr');
        callback()
    }, 1000);
}

firstFunction(()=>{
    secFunction(()=>{
        thirdstFunction(()=>{
            console.log('all done');
        })
    })
})