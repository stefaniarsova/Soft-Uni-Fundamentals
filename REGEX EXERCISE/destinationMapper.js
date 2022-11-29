function solve(input){
let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
let validDestinations = [];
let match = pattern.exec(input);
while(match != null){
    let destination = match.groups['destination'];
    validDestinations.push(destination)
    match = pattern.exec(input);
}
console.log(`Destinations: ${validDestinations.join(', ')}`);

let travelPoints = 0;

for(let destination of validDestinations){
    let points = destination.length;
    travelPoints += points;
}
console.log(`Travel Points: ${travelPoints}`);

}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")