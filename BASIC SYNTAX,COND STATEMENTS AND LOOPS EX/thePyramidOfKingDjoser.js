function thePyramidOfKingDjoser(base , increment){
let stoneNeeded = 0;
let marbleNeeded = 0;
let lapisLazuliNeeded = 0;
let goldNeeded = 0;
let finalHeight = 0;
let counter = 0;

for(let i = base ; i > 0; i -= 2){
    counter++;
    finalHeight += increment;

    let currentStoneNeeded =  0;

    if(i > 2){
        currentStoneNeeded = (base - 2) * (base - 2);
        stoneNeeded += currentStoneNeeded;

        if(counter % 5 === 0){
            let currentLapisLazuliNeeded = (base * base) - currentStoneNeeded;
            lapisLazuliNeeded += currentLapisLazuliNeeded;
        }else {
            let currentMarbleNeeded = (base * base) - currentStoneNeeded;
            marbleNeeded += currentMarbleNeeded ;
        }
    } else {
        goldNeeded = base * base;
    }
    base -= 2;
}
stoneNeeded *= increment;
marbleNeeded *= increment;
lapisLazuliNeeded *= increment;
goldNeeded *= increment;
console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliNeeded)}`);
console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
console.log(`Final pyramid height: ${finalHeight}`)
}

thePyramidOfKingDjoser(11,1)