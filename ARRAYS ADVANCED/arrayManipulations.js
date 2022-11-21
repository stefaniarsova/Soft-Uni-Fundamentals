function arrayManipulations(input){
let array = input.shift().split(" ").map(Number);


for(let i = 0; i < input.length; i++){
    let command = input[i].split(' ');

    if(command[0] === 'Add'){
        let element = Number(command[1]);
        array.push(element);
    }

    if(command[0] === 'Remove'){
        let element = Number(command[1]);
        array = array.filter(n => n != element);
    }

    if(command[0] === 'RemoveAt'){
        let index = Number(command[1]);
        array.splice(index,1);
        
    }

    if(command[0] === 'Insert'){
        let element = command[1];
        let index = command[2];
        array.splice(index , 0 , element);
    }
    
}
console.log(array.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)