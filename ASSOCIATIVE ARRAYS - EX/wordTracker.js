function wordTracker(array){
    let result = {};
    let words = array.shift().split(' ');
    
    for(let word of words){
        result[word] = Number(0);
    }

    for(let line of array){
        if(result.hasOwnProperty(line)){
            result[line] += 1;
        }
    }
let sorted = Object.entries(result).sort((a,b) => b[1] - a[1] );

for(let [word , count] of sorted){
    console.log(`${word} - ${count}`);
}


}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )