function inventory(input){
    let heroList = [];

    for(let line of input){
        let tokens = line.split(' / ');
        let name = tokens[0];
        let level = tokens[1];
        let items = tokens[2];
        let currentHero = {
            name,
            level,
            items
        }
        heroList.push(currentHero);
    }

    heroList.sort((a,b) => a.level - b.level);

    for(let hero of heroList){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }


}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )