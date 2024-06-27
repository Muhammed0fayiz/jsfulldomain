function op(hello,callback){
    console.log(`hello ${hello}`);
    callback()
}

function sayhello(){
    console.log('goodbye');
}



op('fayiz',sayhello)