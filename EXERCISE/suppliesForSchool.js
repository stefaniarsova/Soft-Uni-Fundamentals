function suppliesForSchool (input){
let penPackages = Number(input[0]);
let markerPackages = Number(input[1]);
let detergentLitres = Number(input[2]);
let discountPercentage = Number(input[3])/100;

let penPrice = penPackages * 5.80;
let markerPrice = markerPackages * 7.20;
let detergentPrice = detergentLitres * 1.20;
let totalSum = penPrice + markerPrice + detergentPrice
let sumWithDiscount = totalSum - discountPercentage*totalSum

console.log(sumWithDiscount)
}
suppliesForSchool(["2 ","3 ","4 ","25 "])