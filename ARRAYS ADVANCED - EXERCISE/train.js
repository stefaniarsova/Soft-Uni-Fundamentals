function train(input){

let wagons = input.shift().split(' ').map(Number);
let maxCapacity = Number(input.shift());

for(let i = 0; i < input.length; i++){
    let command = input[i].split(' ');
    
    if(command[0] === 'Add'){
        let passengers = Number(command[1])
        wagons.push(passengers);
    }else {
        for(let index = 0; i < wagons.length; index++){
        if(Number(wagons[index]) + Number(command[0]) <= maxCapacity){
            wagons[index] += Number(command[0]);
            break;
        }
        }
    }
    
}
console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)