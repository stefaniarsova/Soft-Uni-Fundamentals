function replaceRepeatingChars(input){
let unique = [];

let word = input.split('');

for(let i = 0 ; i < word.length; i++){
    let currChar = word[i];
    let nextChar = word[i+1];
    if(currChar != nextChar){
        unique.push(currChar);
    }
}

console.log(unique.join(''));

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')