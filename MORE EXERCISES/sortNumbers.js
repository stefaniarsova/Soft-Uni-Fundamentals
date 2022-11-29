function sortNumbers (num1 , num2 , num3){
let arr = [num1 , num2 , num3];
arr.sort((a,b) => b - a)
console.log(arr.join('\n'))
}
sortNumbers(-2,
1,
3)
