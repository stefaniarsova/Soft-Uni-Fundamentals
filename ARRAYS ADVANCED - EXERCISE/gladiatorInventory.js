function gladiatorInventory (array){
let inventory = array.shift().split(' ')

for(let command of array){
    let currCommand = command.split(' ')
    
    if(currCommand[0] === 'Buy'){
    inventory.push(currCommand[1]);        

    }else if(currCommand[0] === 'Trash'){
        let indexOfEquipment = inventory.indexOf(currCommand[1]);
        inventory.splice(indexOfEquipment,1);

    }else if(currCommand[0] === 'Repair'){
        if(inventory.includes(currCommand[1])){
        let indexOfItemToRepair = inventory.indexOf(currCommand[1])
        inventory.splice(indexOfItemToRepair,1);
        inventory.push(currCommand[1]);
        }

    }else if(currCommand[0] === 'Upgrade'){
     let item = currCommand[1].split('-');
     let upgraded = item.join(':');
     if(inventory.includes(item[0])){
         let indexOfUpgrade = inventory.indexOf(item[0]);
         inventory.splice(indexOfUpgrade + 1,0,upgraded);
     } 

    }
}
console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)