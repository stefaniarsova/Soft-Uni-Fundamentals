function pascalCaseSplitter(input){
    let splitted = [];
    let word = input[0];
    
    for(let i = 1; i < input.length; i++){
        let currChar = input[i];
        if(currChar.toUpperCase() !== currChar){
            word = word.concat(currChar);
        }else {
            splitted.push(word);
            word = currChar;
        }

    }
    splitted.push(word)
    console.log(splitted.join(', '));

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')