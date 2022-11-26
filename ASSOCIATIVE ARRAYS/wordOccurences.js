function wordOccurences(input){
    let result = {} ;

    for(let i = 0; i < input.length; i++){
        let word = input[i];
        result[word] = 0;
    }

    for(let word of input){
        if(result.hasOwnProperty(word)){
            result[word]++
        }
    }
    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);
    console.log(sorted);
    for(let [word,count] of sorted){
        //console.log(`${word} -> ${count} times`)
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])