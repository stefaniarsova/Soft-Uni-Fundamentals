function arenaTier(input){
    let gladiators = {};

    for(let line of input){
        if(line === 'Ave Cesar'){
            break ;
        }
        let tokens = line.split(' -> ');
        if(tokens.length !== 1){
           let [name , technique , skill] = tokens;
           //console.log(name , technique , skill);
           
    
        }else {
            //let [gladiator1 , gladiator2] = tokens.split(' vs ');
            let name = tokens[0][0];
            console.log(name)
        }
        
    }



}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    )