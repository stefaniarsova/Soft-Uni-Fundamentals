function shoppingList(input){
let list = input.shift().split('!');

while(input[0] != 'Go Shopping!'){
    let tokens = input.shift().split(' ');
    let command = tokens[0];
    
    if(command === 'Urgent'){
        let item = tokens[1];
        let isIncluded = list.includes(item)
        if(!isIncluded){
            list.unshift(item);
        }

    }else if(command === 'Unnecessary'){
        let item = tokens[1];
        let itemIndex = list.indexOf(item);
        if(itemIndex != -1){
            list.splice(itemIndex,1);
        }

    }else if(command === 'Correct'){
        let oldItem = tokens[1];
        let newItem = tokens[2];
        let oldItemIndex = list.indexOf(oldItem);
        if(oldItemIndex != -1){
            list.splice(oldItemIndex,1,newItem);
        }

    }else if(command === 'Rearrange'){
        let item = tokens[1];
        let itemIndex = list.indexOf(item);
        if(itemIndex != -1){
            list.splice(itemIndex, 1)
            list.push(item)
        }

    }
}
console.log(list.join(', '));
}
shoppingList(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes', 
    'Correct Pepper Onion',
    'Rearrange Grapes'
    ]
    )