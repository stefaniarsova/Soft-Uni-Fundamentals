function sorting(array){
let sortedArray = array.sort((a,b) => b - a);
let newArray= [];
while(sortedArray.length > 0){
    let bigNum = sortedArray.shift();
    let smallNum = sortedArray.pop();
    newArray.push(bigNum);
    newArray.push(smallNum);

}
console.log(newArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])