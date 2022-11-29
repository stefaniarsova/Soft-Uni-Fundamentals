function solve(input){
    let n = Number(input.shift());
    let pattern = /^(\|)(?<name>[A-Z]{4,})\1:(#)(?<title>[A-Za-z]+(\s)[A-Za-z]+)\3$/;

    for(let i = 0 ; i < n; i++){
        let line = input.shift();
        let match = pattern.exec(line);
        
        if(match != null){
            let name = match.groups['name'];
            let title = match.groups['title'];
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        }else {
            console.log("Access denied!");
        }
    }

}
solve(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
