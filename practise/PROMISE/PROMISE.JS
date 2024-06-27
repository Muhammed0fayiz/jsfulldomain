let mypromise=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve('currect')
    }else{
        reject('not correct')
    }
});

mypromise.then((message) => {
    console.log(message);
})
.catch((message)=>{
    console.log(message);
})