function solve(input){
let message = input.shift().split('');

while(input[0] != 'Decode'){
    let tokens = input.shift().split('|');
    let command = tokens[0];

    if(command === 'Move'){
    let nLetters = tokens[1];
    let lettersToMove = message.slice(0,nLetters);
    let lettersLeft = message.slice(nLetters, message.length);
    console.log(lettersLeft.push(lettersToMove));
    }else if(command === 'Insert'){

    }else if(command === 'ChangeAll'){

    }
    
}

}
solve([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]
)