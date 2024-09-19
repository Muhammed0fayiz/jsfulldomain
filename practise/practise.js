
let arr=[1,2,3,4,5,7,9,10,11,11]




function remove(arr){

    function count(arr){
        let count=0
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]%2!==0&& arr[i+1]%2!==0){
                count++
                i++
        }
    }
        return count 
    }

function removeVall(arr){
    let i=0;

    while(i<arr.length-1){
        if(arr[i]%2===1 && arr[i+1]%2===1){
            arr.splice(i,2)
        }else{
            i++
        }
    }

}

let size=count(arr)

if(size>0){
    console.log('count is',size)
    removeVall(arr)
}
return arr
    
}

console.log(arr)
console.log(remove(arr))