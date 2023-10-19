function arrayDiff(a,b){

    let newArr = [];

    for(let i = 0;i<=a.length-1;i++){
        if(a[i].includes(b)){
            newArr.push(a[i]);
        }
    }


    return newArr;
}

console.log(arrayDiff([1,2],[1]))