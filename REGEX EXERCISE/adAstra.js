function solve(input){
    let pattern = /(#|\|)(?<item>[a-zA-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let match = pattern.exec(input);
    let totalCalories = 0;
    let validItems = [];

    
    while(match != null){
        let item = match.groups['item'];
        let date = match.groups['date'];
        let calories = Number(match.groups['calories']);
        totalCalories += calories;
        validItems.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`)
        match = pattern.exec(input);

    }
    
    let daysToLast = (Math.floor(totalCalories/2000)) ;
    console.log(`You have food to last you for: ${daysToLast} days!`);
    if(daysToLast > 0){
        console.log(validItems.join('\n'));
    }

    

}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )