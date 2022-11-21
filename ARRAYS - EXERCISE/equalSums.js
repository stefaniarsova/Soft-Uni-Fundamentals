function equalSums (arr) {

let hasEqualSum = false ;

for(let index = 0;index < arr.length; index++){
    let leftSum = 0 ;
    let rightSum = 0;
    
    for(let j = index - 1; j >= 0; j--){
        leftSum+= arr[j];
    }

    for(let n = index + 1; n <arr.length; n++){
        rightSum+=arr[n];
    }
    if(leftSum === rightSum){
        hasEqualSum = true;
        console.log(index)
    }

}
if(!hasEqualSum){
    console.log('no')
}

}

equalSums([1, 2, 3, 3])