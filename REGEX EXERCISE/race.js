function race(input){

let lettersPattern = /[A-Za-z]/g;
let numbersPattern = /\d+/g;

let racers = input.shift().split(', ');


while(input[0] =! 'end of race'){
let line = input.shift();
let letters = line.match(lettersPattern);
let numbers = line.match(numbersPattern);

let name = letters.join('');
let distance = numbers.map(Number);

let totalDistance = 0;

for(let x of distance){
    totalDistance += x;
}
}

}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])