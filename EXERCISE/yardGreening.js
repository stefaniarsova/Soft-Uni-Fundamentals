function yardGreening (input){
let area = Number(input[0]);
let priceForGardening = area * 7.61;
let discount = priceForGardening * 0.18;

console.log(`The final price is: ${priceForGardening} lv.`)
console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])