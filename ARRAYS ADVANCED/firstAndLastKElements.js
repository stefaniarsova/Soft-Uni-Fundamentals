function firstAndLastKElements(array){
let k = array.shift();
let firstKs = array.slice(0 , k);
let lastKs = array.slice(-k);
console.log(firstKs.join(' '));
console.log(lastKs.join(' '));
}
firstAndLastKElements([2, 7, 8, 9])