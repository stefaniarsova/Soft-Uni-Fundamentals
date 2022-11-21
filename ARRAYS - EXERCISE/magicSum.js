function magicSum(array , magicNumber){

for(let i = 0; i < array.length; i++){
    let num1 = Number(array[i]);
    let num2 = Number(array[i+1]);

    if(num1 + num2 === magicNumber){
        console.log(`${num1} ${num2}`)
    }
}
}
magicSum([1, 7, 6, 2, 19, 23],8)