function biggestOfThreeNumbers(n1 , n2 , n3){
let arr = [n1 , n2 , n3];
arr.sort((a , b) => a - b);
let biggestNumber = arr.pop();
console.log(biggestNumber);
}
biggestOfThreeNumbers(130,5,99)