function negativeOrPositive(array) {
let newArray = [];

for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        newArray.unshift(array[i]);
    }else {
        newArray.push(array[i]);
    }
}
console.log(newArray.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9'])