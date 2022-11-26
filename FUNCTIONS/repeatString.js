function repeatString(string , repetition){
let newString = '';

for(i = 0; i < repetition; i++){
    newString+= string
}
console.log(`${newString}`);
}
repeatString('abc', 3)