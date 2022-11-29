function perfectNumber(number){

    function findItsDividors(num){
        let dividors = [];
        for(let i = 1; i < num; i ++){
            if(num % [i ]=== 0){
                dividors.push(i);
            }
        }
        return dividors;
    }
    
    let arrOfDividors = findItsDividors(number);
    
    function sumDividors(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
    }
    
    let comparingSum = sumDividors(arrOfDividors);
    if(comparingSum === number){
        console.log("We have a perfect number!");
    }else {
        console.log("It's not so perfect.")
    }
    
    }
    
perfectNumber(1236498)