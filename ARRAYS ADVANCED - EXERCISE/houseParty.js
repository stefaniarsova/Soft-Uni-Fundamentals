function houseParty (array){
let list = [];

for(let i = 0; i < array.length; i++){
    let tokens = array[i];
    let command = tokens.split(' ');
    let name = command[0];

    if(command.length === 3){
        let isIncluded = list.includes(name)
        if(isIncluded){
            console.log(`${name} is already in the list!`);
        }else {
            list.push(name);
        }
    }

    if(command.length === 4){
        let indexOfPerson = list.indexOf(name);
        if(indexOfPerson !== -1){
            list.splice(indexOfPerson,1)
        }else {
            console.log(`${name} is not in the list!`);
        }
    }
   

    
}
console.log(list.join('\n'));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)