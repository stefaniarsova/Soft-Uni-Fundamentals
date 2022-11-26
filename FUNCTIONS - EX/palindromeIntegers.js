function palindromeIntegers(inputArray){
let arrayOfNumbers = inputArray;
function isPalindrom(number){
    let startNum = number;
    let reversedNumber = Number(number.toString().split("").reverse().join(""));
    if(startNum === reversedNumber){
        return true;
    }else {
        return false;
    }
}
for(let i = 0; i < arrayOfNumbers.length; i++){
    let currNum = Number(arrayOfNumbers[i]);
    console.log(isPalindrom(currNum));
}
}
palindromeIntegers([123,323,421,121])