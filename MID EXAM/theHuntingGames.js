function theHuntingGames (input){
input = input.map(Number);
let days = input.shift();
let countPlayers = input.shift();
let groupsEnergy = input.shift();
let waterPerOne = input.shift();
let waterForAll = waterPerOne * countPlayers * days;
let foodPerOne = input.shift();
let foodForAll = foodPerOne * countPlayers * days;
let daysCounter = 1;

for(let i = 0; i < input.length; i++ , daysCounter++){
    let choppingWood = input[i];
    groupsEnergy -= choppingWood;

    if(groupsEnergy <= 0){
    console.log(`You will run out of energy. You will be left with ${foodForAll.toFixed(2)} food and ${waterForAll.toFixed(2)} water.`);
    break ;
    }

    if(daysCounter % 2 === 0){
        let waterBoost = groupsEnergy * 0.05;
        groupsEnergy += waterBoost;
        waterForAll -= waterForAll * 0.30;
    }

    if(daysCounter % 3 === 0){
        let foodBoost = groupsEnergy * 0.10;
        groupsEnergy += foodBoost;
        foodForAll -= foodForAll/countPlayers;
    }
}
if(groupsEnergy > 0){
    console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
}
}
theHuntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])
