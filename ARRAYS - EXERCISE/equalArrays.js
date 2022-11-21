function equalArrays(arr1 , arr2){
let areEqual = true
let sum = 0;
let index = 0;

for(let i = 0; i< arr1.length ; i++){

    if(arr1[i] !== arr2[i]){
        areEqual = false ;
        index = i;
        break ;
    }
    sum += Number(arr1[i]);
}
if(areEqual){
    console.log(`Arrays are identical. Sum: ${sum}`)
}else{
    console.log(`Arrays are not identical. Found difference at ${index} index`);
}

}

equalArrays(['10','20','30'], ['10','20','30'])