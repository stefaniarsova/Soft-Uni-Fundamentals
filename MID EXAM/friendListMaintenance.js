function friendListMaintenance(input){
let list = input.shift().split(', ');
let blacklistedCount = 0;
let lostCount = 0;

for(let i = 0; i < input.length; i++){
    let tokens = input[i].split(' ');
    let command = tokens[0];
    
    if(command === 'Blacklist'){
        let nameBlacklist = tokens[1];
        let indexOfBlacklistName = Number(list.indexOf(nameBlacklist));
        if(indexOfBlacklistName === -1){
        console.log(`${nameBlacklist} was not found.`)
        }else {
            blacklistedCount++
            list.splice(indexOfBlacklistName,1,'Blacklisted');
            console.log(`${nameBlacklist} was blacklisted.`);
        }

    }else if(command === 'Error'){
        let indexError = Number(tokens[1]);
        let errorName = list[indexError]
        if(indexError !== -1 && indexError < list.length && errorName !== 'Blacklisted' && errorName !== 'Lost'){
            lostCount++
            list.splice(indexError,1,'Lost');
            console.log(`${errorName} was lost due to an error.`);
        }
    }else if(command === 'Change'){
        let indexChange = Number(tokens[1]);
        let currentName = list[indexChange];
        let newName = tokens[2];
        if(indexChange !== -1 && indexChange < list.length){
            list.splice(indexChange,1,newName);
            console.log(`${currentName} changed his username to ${newName}.`);
        }


    }else if(command === 'Report'){
        console.log(`Blacklisted names: ${blacklistedCount}`);
        console.log(`Lost names: ${lostCount}`);
        console.log(list.join(' '));
        break;
    }

}

}
friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])
