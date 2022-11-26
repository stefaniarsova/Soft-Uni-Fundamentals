function charactersInRange(char1, char2){
let startChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
let endChar = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));

let printline = [];

for(let i = startChar + 1; i < endChar; i++){
printline.push(String.fromCharCode(i));
}
console.log(printline.join(' '))
}
charactersInRange('#',':')