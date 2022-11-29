function tseamAccount (array){
let games = array.shift().split(' ');

while(array[0] != 'Play!'){
    let tokens = array.shift().split(" ");
    let command = tokens[0];
    
    switch(command){
        case 'Install':
            let installedGame = tokens[1];
            let isInstalledGame = games.includes(installedGame);
            if(!isInstalledGame){
                games.push(installedGame)
            }
        break;
        case 'Uninstall':
            let uninstallGame = tokens[1];
            let indexUninstallGame = games.indexOf(uninstallGame);
            if(indexUninstallGame != -1){
                games.splice(indexUninstallGame , 1);
            }
        break;
        case 'Update':
            let updateGame = tokens[1];
            let indexUpdateGame = games.indexOf(updateGame);
            if(indexUpdateGame != -1){
                games.splice(indexUpdateGame , 1);
                games.push(updateGame);
            }
        break;
        case 'Expansion':
            let expansion = tokens[1].split('-');
            let expansionGame = expansion[0];
            let expansionElement = expansion[1];
            let expansionIndex = games.indexOf(expansionGame);
            if(expansionIndex != -1){
                games.splice(expansionIndex + 1, 0 , `${expansionGame}:${expansionElement}`)
            }
        break;
    }
}

console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)