function smallestTwoNumbers(array){
let sorted = array.sort((a , b) => a - b);
let smallestTwo = sorted.slice(0,2);
console.log(smallestTwo.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])