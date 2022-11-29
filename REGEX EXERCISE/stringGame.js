function solve(input){
    let str = input.shift();
    

    while(input[0] !== 'Done'){
        let line = input.shift();
        let tokens = line.split(' ');
        let command = tokens[0];

    if(command === 'Change'){
        let char = tokens[1];
        let replacement = tokens[2];

        while(str.includes(char)){
        
        str = str.replace(char,replacement);
        
        }
        console.log(str);

    }else if (command === 'Includes'){
        let substring = tokens[1];
        
        if(str.includes(substring)){
            console.log('True')
        }else {
            console.log('False')
        }

    }else if(command === 'End'){
        let substring = tokens[1];

        if(str.endsWith(substring)){
            console.log('True')
        }else {
            console.log('False')
        }

    }else if(command === 'Uppercase'){
        str = str.toUpperCase();
        console.log(str);

    }else if(command === 'FindIndex'){
        let char = tokens[1];
        let charIndex = str.indexOf(char);
        console.log(charIndex);

    }else if(command === 'Cut'){
        let startIndex = Number(tokens[1]);
        let count = Number(tokens[2]);
        let endIndex = startIndex + count;

        let cut = str.slice(startIndex, endIndex);
        console.log(cut);
    }


    }

}
solve(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])
