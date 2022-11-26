function addAndSubtract(num1 , num2 , num3){
let add = (n1 , n2) => n1 + n2;

let result = add(num1 , num2);

let subtract = (result , n3) => result -n3;

let finalResult = subtract(result , num3)

console.log(finalResult)
}
addAndSubtract(23,6,10)