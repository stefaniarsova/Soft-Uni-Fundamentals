function processOddNumbers(array){
let filtered = array.filter((x , i) => i % 2 === 1);

let doubled = filtered.map(x => x * 2);

let reversed = doubled.reverse();

console.log(reversed.join(' '));
}
processOddNumbers([10, 15, 20, 25])