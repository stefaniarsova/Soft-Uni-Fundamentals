function sumDigits(num){
let numAsString = String(num);
let sum = 0;
for(const char of numAsString){
 sum += Number(char); 
}
console.log(sum)
}

sumDigits(245678)