function dungeonestDark(input) {
let rooms = input[0].split("|");
let health = 100;
let coins = 0;
let isAlive = true;
for(let index = 0 ; index < rooms.length; index++){
    let room = rooms[index].split(" ");
    
    if(room[0] === "potion"){
        let currHealth = room[1]
        if(health <= 100){
            if(health + Number(currHealth) >= 100){
                currHealth = 100 - health;
                health = 100;
            }else {
                health += Number(currHealth);
            }
            console.log(`You healed for ${currHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
    }else if(room[0] === "chest"){
        let foundCoins = Number(room[1]);
        console.log(`You found ${foundCoins} coins.`);
        coins+= foundCoins;
    }else {
        let monsterName = room[0];
        let monsterDamage = Number(room[1]);
        health -= monsterDamage;
        if(health > 0){
        console.log(`You slayed ${monsterName}.`);
        }else {
            console.log(`You died! Killed by ${monsterName}.`);
            console.log(`Best room: ${index+1}`);
            isAlive = false;
            break ;
            
        }
    }

}
if(isAlive){
console.log("You've made it!");
console.log(`Coins: ${coins}`);
console.log(`Health: ${health}`);
}
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])