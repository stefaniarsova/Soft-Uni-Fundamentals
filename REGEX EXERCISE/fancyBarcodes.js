function solve(input){
let pattern = /^(@#+)(?<word>[A-Z][A-Za-z\d]{4,}[A-Z])(@#+)$/;
let n = input.shift();
let barcodes = [];
//let match = pattern.exec(input);

for(let i = 0; i <input.length; i ++){
let line = input[i];
let match = pattern.exec(line);

if (match != null){
let productGroup = '';
let word = match.groups['word']
for(let char of word){
    if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
        productGroup += char;
        
    }
}
if(productGroup === ''){
    productGroup = '00';
}
console.log(`Product group: ${productGroup}`)
}else {
console.log("Invalid barcode")
}

}

}
solve(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

