function guineaPig (input) {
let foodQuantity = Number(input[0]) * 1000;
let hay = Number(input[1]) * 1000;
let cover = Number(input[2]) * 1000;
let pigWeight = Number(input[3]) * 1000;
let daysCounter = 0;

while(daysCounter > 30){
    daysCounter ++
    foodQuantity -= 300;
    if(daysCounter % 2 == 0){
     let hayForTheDay = foodQuantity * 0.05;
     hay -= hayForTheDay;
    }
    if(daysCounter % 3 == 0){
        let coverForTheDay = Math.fround(pigWeight/3);
        cover -= coverForTheDay;
    }

    if(foodQuantity < 0 || hay <0 || cover < 0){
        console.log("Merry must go to the pet store!");
        break ;
    }
}
if(foodQuantity > 0 && hay && 0 && cover > 0){
console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}."`);
}
}
guineaPig([10,
    5,
    5.2,
    1
    ])