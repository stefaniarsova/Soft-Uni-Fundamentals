function passwordReset(input){

    let password = input.shift();
    

    while(input[0] != 'Done'){
        let line = input.shift().split(' ');
        let command = line[0];

        if(command === "TakeOdd"){
        let newPassword = '';
        for(let i = 0; i < password.length; i++){
            let char = password[i];
            if(i % 2 != 0){
            newPassword += char;
            }
        }
        password = newPassword;
        console.log(password);


        }else if(command === "Cut"){
        let startIndex = line[1];
        let endIndex = line[2];
        let removed = password.split('');
        removed = removed.splice(startIndex,endIndex).join('');
        password = password.replace(removed,'');
        
        console.log(password);

        }else if(command === "Substitute"){
        let substring = line[1];
        let substitute = line[2]; 
        let isIncluded = password.includes(substring);
        if(isIncluded){
            password = password.split(substring);
            password = password.join(substitute);
            console.log(password);
        }else{
            console.log("Nothing to replace!");
        }

        }
        
        

    }
    console.log(`Your password is: ${password}`);

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
)