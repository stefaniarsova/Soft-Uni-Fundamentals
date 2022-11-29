function stringSubstring(searchedWord , text){
    searchedWord = searchedWord.toLowerCase();
    let sentence = text.split(' ');

    for(let word of sentence){
        word = word.toLowerCase();
        if(word === searchedWord){
            console.log(searchedWord);
            return;
        }
        
    }
    console.log(`${searchedWord} not found!`); 


}
stringSubstring('javascript1',
'JavaScript is the best programming language')