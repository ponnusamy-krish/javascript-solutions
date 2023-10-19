function arrayDiff(a,b){
let newArr = [...a];

for(let i = 0;i<=b.length-1;i++){
    for(let j = 0;j<=a.length-1;j++){
        if(a[j]!==b[i]){
        console.log(b[i],a[j])
        newArr.pop(b[i])
        }
    }
}


    return newArr;
}

console.log(arrayDiff([1,2,3,4],[2,3]))