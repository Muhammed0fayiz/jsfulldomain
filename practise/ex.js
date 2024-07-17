let a='my name is fayiz'
let b=a.split(' ')
let lens=b[0]
for(let i=0;i<b.length;i++){
if(b[i].length>lens.length)
  lens=b[i]
}

 console.log(lens);