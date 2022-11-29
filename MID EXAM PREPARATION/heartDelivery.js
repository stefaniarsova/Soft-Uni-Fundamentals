function heartDelivery (input){
let houses = input.shift().split('@').map(Number);
let cupid = 0;

for(let i = 0; i < input.length; i++){
    let tokens = input[i].split(' ');
    let command = tokens[0]
    let jump = Number(tokens[1]);
    
    
    if(command === 'Jump'){
        cupid+= jump;
        
       if(cupid >= houses.length){
           cupid = 0;
       }

       if(houses[cupid] == 0){
           console.log(`Place ${cupid} already had Valentine's day.`);
       }else {
           houses[cupid] -= 2;
           if(houses[cupid] == 0){
            console.log(`Place ${cupid} has Valentine's day.`);
           }
       }
    
    }else if(command === 'Love!'){

    break;
    }
}

console.log(`Cupid's last position was ${cupid}.`)
let missed = 0;
for(let house of houses){
    if(house > 0){
        missed++
    }
}
if(missed > 0){
    console.log(`Cupid has failed ${missed} places.`);
}else {
    console.log(`Mission was successful.`);
}
}
heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
