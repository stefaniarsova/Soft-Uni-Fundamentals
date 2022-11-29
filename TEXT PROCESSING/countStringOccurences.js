function countStringOccurences(text, word){
    let tokens = text.split(' ');
    let count = tokens.filter(x => x === word);
    console.log(count.length);

}
countStringOccurences('This is a word and it also is a sentence',
'is'
)