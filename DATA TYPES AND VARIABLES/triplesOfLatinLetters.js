function triplesOfLatinLetters (n){
n = Number(n);

for(let i = 1; i <= n; i++){
    let letterOne = String.fromCharCode(96+i);
 
   for(let y = 1; y <= n; y++){
    let letterTwo = String.fromCharCode(96+y);
    
    for(let z = 1; z <= n; z++){
        let letterThree = String.fromCharCode(96+z);
        let printline = letterOne + letterTwo + letterThree;
        console.log(printline);
    }
   }
}

}

triplesOfLatinLetters('3')