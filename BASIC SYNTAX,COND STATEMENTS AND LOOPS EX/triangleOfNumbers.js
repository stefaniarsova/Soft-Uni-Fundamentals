function triangleOfNumbers(n) {
    for(let i = 1; i <= n; i ++){
    let printline = "";
    for(let j = 1; j <= i; j++){
        printline += i;
        if(j !== i){
            printline += " "
        }
    }
    console.log(printline)
    }
    
}
triangleOfNumbers(6)