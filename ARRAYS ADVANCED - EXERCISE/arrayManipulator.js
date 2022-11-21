function arrayManipulator (array , commands){

    for(let command of commands){
        let tokens = command.split(' ');
        let currCommand = tokens[0];

        if(currCommand === 'add'){
            let index = tokens[1];
            let element = tokens[2];
            array.splice(index , 0 , element);

        }else if (currCommand === 'addMany'){
            let index = tokens[1];
            let elementsToAdd = tokens.splice(2).map(Number);
            array.splice(index, 0 , ...elementsToAdd);

        }else if (currCommand === 'contains'){
            let element = tokens[1];
            let indexOfElement = array.indexOf(element);
            console.log(indexOfElement);

        }else if (currCommand === 'remove'){
            let index = tokens[1];
            array.splice(index , 1);

        }else if (currCommand === 'shift'){
            let positions = tokens[1];

            for(let i = 0; i < positions ; i++){
                let element = array.shift();
                array.push(element);
            }

        }else if (currCommand === 'sumPairs'){
            if(array.length % 2 === 0){
                array.push(0);
            }
            let result = [];

            for(let i = 0;i < array.length; i++){
                let sum = Number(array[i]) + Number(array[i + 1]);
                result.push(sum);
            }

            array = result;

        }else if (currCommand === 'print'){
            console.log(`[${array.join(', ')}]`);
            break ;
        }
        

    
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )