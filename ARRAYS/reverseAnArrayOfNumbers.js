function reverseAnArrayOfNumbers (n , arr){
let reversedArray = [];
for (let i = 0; i < n; i++){
    reversedArray.push(arr[i]);
}
let printline = ''
for(let i = reversedArray.length - 1; i >= 0; i--){
    printline+= reversedArray[i];
    printline+= ' ';
}
console.log(printline)
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])