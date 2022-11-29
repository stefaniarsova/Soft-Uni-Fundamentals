function addAndRemove(commands){
let currentNumber = 1;
let array = [];

for(let command of commands){
    
if(command == 'add'){
array.push(currentNumber);
}else if(command == 'remove'){
    array.pop();
}
currentNumber ++;
}

console.log(array.join(' '));
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])