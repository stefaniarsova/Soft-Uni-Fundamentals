function modernTimesOfHashtag(input){
let result = [];
let splitted = input.split(' ');

for(let word of splitted){
    if(word.includes('#') && word.length > 1){
        result.push(word);
    }
}
for(let word of result){
    let isWords = true;
    for(let i = 1; i < word.length; i++){
        if(!isNaN(word[i])){
            isWords = false;
        }
    }
    if(isWords){
        console.log(word.substring(1));
    }
}
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #spec123ial word in #socialMedia')