function smallestOfThreeNumbers (num1 , num2 , num3){

function findSmallestNumber(n1, n2 , n2){
let smallestumber = 0;

if(num1 < num2 && num1 < num3){
    smallestumber = num1;
}else if(num2 < num1 && num2 < num3){
    smallestumber = num2;
}else {
    smallestumber = num3;
}
return smallestumber;
}
console.log(findSmallestNumber(num1 , num2 , num3))
}
smallestOfThreeNumbers(2,5,3)