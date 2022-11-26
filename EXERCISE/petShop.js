function petShop (input){
let dogFoodCount = Number(input[0]);
let dogFoodPrice = dogFoodCount * 2.50;
let catFoodCount = Number(input[1]);
let catFoodPrice = catFoodCount * 4;
let totalPrice = catFoodPrice + dogFoodPrice;

console.log(`${totalPrice} lv.`)

}

petShop(["5 ","4 "])