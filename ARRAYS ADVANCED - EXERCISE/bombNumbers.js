function bombSpecialNumbers(array , bomb){
let bombNumber = bomb[0];
let bombPower = bomb[1];
let bombIndex = array.indexOf(bombNumber);

while(bombIndex !== -1){
    let startExplosion = Math.max(0, bombIndex - bombPower);
    let explosionLength = bombPower * 2 + 1;
    array.splice(startExplosion, explosionLength);
    bombIndex = array.indexOf(bombNumber);
}

let sum = 0;

for(let num of array){
    sum+=num
}

console.log(sum);

}
bombSpecialNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )