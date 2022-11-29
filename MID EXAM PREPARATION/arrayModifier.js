function arrayModifier(input){
let array = input.shift().split(' ').map(Number);

for(let i = 0; i < input.length; i++){
    let tokens = input[i].split(' ');
    let command = tokens[0];
    
    if(command === 'swap'){
        let index1 = tokens[1];
        let index2 = tokens[2];
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }else if (command === 'multiply'){
        let index1 = tokens[1];
        let index2 = tokens[2];
        let sum = array[index1] * array[index2];
        array[index1] = sum;
    }else if (command === 'decrease'){
        for(let j = 0; j < array.length; j++){
        array[j]--;
        }
    }else if (command === 'end'){
        break ; 
    }
}
console.log(array.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )