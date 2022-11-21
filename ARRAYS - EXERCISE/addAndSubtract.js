function addAndSubtract (arr){
let myArr = arr;
let sumOfOriginalArray = 0 ;
let sumOfModifiedArray = 0 ;

for(let index = 0; index < myArr.length; index++){
    sumOfOriginalArray+= myArr[index];
if(myArr[index] % 2 === 0){
    myArr[index]+= index;
}else {
    myArr[index]-= index;
}
    sumOfModifiedArray+= myArr[index];
}
console.log(myArr);
console.log(sumOfOriginalArray);
console.log(sumOfModifiedArray);
}

addAndSubtract([5, 15, 23, 56, 35])