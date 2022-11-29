function printNthElement(array){
let step = Number(array.pop());
let newArray = [];
for(let i = 0; i < array.length ; i += step){
    let element = array[i];
    newArray.push(element);
}

console.log(newArray.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2'])