function nonDecreasingSubset(array){
    let biggestNumber = 0;
    let newArray = [];
    for(let i = 0; i < array.length; i ++){
        let currentNum = Number(array[i]);
        if(currentNum >= biggestNumber){
            newArray.push(currentNum);
            biggestNumber = currentNum;
        }
        
    }
    console.log(newArray.join(' '));
    }
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])