function oddAndEvenSum(number){
let numberAsString = number.toString();

    function oddSum(numberAsString){
    let oddSumNum = 0;
    for(let i = 0; i < numberAsString.length; i++){
        let currNum = Number(numberAsString[i]);
        if(currNum % 2 !== 0){
            oddSumNum += currNum;
        }else {
            continue;
        }
    }
    return oddSumNum;
    }
    function evenSum(numberAsString){
        let evenSumNum = 0;
        for(let i = 0; i < numberAsString.length; i++){
            let currNum = Number(numberAsString[i]);
            if(currNum % 2 === 0){
                evenSumNum += currNum;
            }else {
                continue;
            }
        }
        return evenSumNum;
    }
    console.log(`Odd sum = ${oddSum(numberAsString)}, Even sum = ${evenSum(numberAsString)}`);
    }
    
oddAndEvenSum(1000435)