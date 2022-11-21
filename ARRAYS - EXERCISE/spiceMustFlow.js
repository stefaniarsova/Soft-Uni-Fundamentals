function spiceMustFlow(startingYield) {
let extractedYield = 0;
let days = 0;
while(startingYield >= 100){
    extractedYield+=startingYield;
    days++;

    if(extractedYield >= 26){
        extractedYield -= 26;
    }
    startingYield-=10;
}
if(extractedYield >= 26){
    extractedYield-=26;
}
console.log(days)
console.log(extractedYield)
}
spiceMustFlow(111)