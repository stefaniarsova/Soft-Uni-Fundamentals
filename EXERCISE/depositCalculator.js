function depositCalculator (input){
let deposit = Number(input[0]);
let term = Number(input[1]);
let annualIncrease = Number(input[2]) / 100;
let currentIncrease = deposit * annualIncrease;
let mothlyIncrease = currentIncrease / 12; 
let totalSum = deposit + term * mothlyIncrease;
console.log(totalSum)

}
depositCalculator(["200 ","3 ","5.7 "])