function bitCount(n){
let bin = n.toString(2);
let num = 0;
for(let i = 0;i<=bin.length-1;i++){
    if(bin[i]==1){
        console.log(1)
        num+=1;
    }
}
return num;
}

let a = 1112;

console.log(bitCount(a));