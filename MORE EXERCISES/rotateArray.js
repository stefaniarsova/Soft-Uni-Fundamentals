function rotationArray(array) {
let rotations = array.pop();

for(let i = 0; i < rotations; i++){
    
let last = array.pop();
array.unshift(last);
}
console.log(array.join(' '));
}
rotationArray(['1', '2', '3', '4', '2'])