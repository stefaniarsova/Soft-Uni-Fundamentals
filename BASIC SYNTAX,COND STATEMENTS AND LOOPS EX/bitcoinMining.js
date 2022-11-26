function bitcoinMining(input){
let bitcoinCounter = 0;
let dayCounter = 0; 
let goldSum = 0;
let sumLeva = 0;
let firstDay = 0;

    for(index = 0; index < input.length; index++){
    dayCounter++;
    let goldAmount = input[index];
    
    if(dayCounter % 3 === 0){
        goldAmount*= 0.70;
    }

    goldSum+= goldAmount;
    sumLeva += goldAmount * 67.51;


    while(sumLeva >= 11949.16){
        if(firstDay ===0){
            firstDay = dayCounter;
        }
        bitcoinCounter++;
        sumLeva -= 11949.16;

    }
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if(bitcoinCounter > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${sumLeva.toFixed(2)} lv.`)
}


bitcoinMining([3124.15, 504.212, 2511.124])
