function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i < arr.length ; i++){
        arr[i] = Number(arr[i]);

        if(Number(arr[i] % 2 === 0)){
            sumEven+= Number(arr[i]);
        }else {
            sumOdd+= Number(arr[i]);
        }
    }
    console.log(sumEven - sumOdd)
} 
evenAndOddSubtraction([1,2,3,4,5,6])