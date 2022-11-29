function solve(input){
let n = input.shift();
let heroes = {}; // name [HP , MP]

for(let i = 0; i < n; i++){
    let line = input.shift();
    let [name , hitPoints , manaPoints] = line.split(' ')
    heroes[name] = [Number(hitPoints),Number(manaPoints)];
}

while(input[0] != 'End'){
    let tokens = input.shift().split(' - ');
    let command = tokens[0];
    
    if(command === 'CastSpell'){
        let [_, name , mpNeeded , spellName] = tokens;
        let heroMp = heroes[name][1];
        mpNeeded = Number(mpNeeded); 

        if(heroMp >= mpNeeded){
            console.log(`${name} has successfully cast ${spellName} and now has ${heroMp - mpNeeded} MP!`);
            heroMp -= mpNeeded;
        }else {
            console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }
        heroes[name][1] = heroMp;

    }else if(command === 'TakeDamage'){
        let [_, name , damage , attacker] = tokens;
        damage = Number(damage);
        let heroHp = heroes[name][0] - damage;
        if(heroHp > 0){
            console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroHp} HP left!`);
            heroes[name][0] = heroHp;
        }else {
            console.log(`${name} has been killed by ${attacker}!`);
            delete heroes[name];
        }
       

    }else if(command === 'Recharge'){
        let [_, name , amount] = tokens;
        amount = Number(amount);
        let heroMp = heroes[name][1] + amount;
        if(heroMp > 200){
            let newAmount = amount - (heroMp - 200);
            amount = newAmount;
            heroMp = 200;
        }
        heroes[name][1] = heroMp;
        console.log(`${name} recharged for ${amount} MP!`)

    }else if(command === 'Heal'){
        let [_, name , amount] = tokens;
        amount = Number(amount);
        let heroHp = heroes[name][0] + amount;
        if(heroHp > 100){
            let newAmount = amount - (heroHp - 100);
            amount = newAmount;
            heroHp = 100;
        }
        heroes[name][0] = heroHp;
        console.log(`${name} healed for ${amount} HP!`)
    }
    
}
let heroesLeft = Object.entries(heroes);
for(let hero of heroesLeft){
    
    let name = hero.shift()
    console.log(`${name}${('\n')}HP: ${hero[0][0]}${('\n')}MP: ${hero[0][1]}`)
}
}
solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])