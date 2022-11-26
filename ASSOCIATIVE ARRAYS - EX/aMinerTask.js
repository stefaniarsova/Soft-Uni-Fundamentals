function aMinerTask(input){
    let resourcesTotal = {};

    for(let index = 0; index <input.length ; index += 2){
        let resource = input[index];
        let quantity = input[index+1];

        if(resourcesTotal.hasOwnProperty(resource) == false){
            resourcesTotal[resource] = new Set();
        }

        resourcesTotal[resource].add(quantity);
    }
    
    for(let [resource , quantity] of Object.entries(resourcesTotal)){
        let totalAmount = 0;

        for(let count of quantity){
            totalAmount+= Number(count)
        }
        console.log(`${resource} -> ${totalAmount}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]   
    )