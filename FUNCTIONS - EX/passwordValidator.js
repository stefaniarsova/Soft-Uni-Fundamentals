function passwordValidator(password){
function isLongEnough(password){
    if(password.length >= 6 && password.length <= 10){
        return true;
    }
}
function isOnlyOfLettersAndDigits(password){
    for(let currCharIndex of password){
        let currChar = currCharIndex.charCodeAt(0);
        if((currChar >=48 && currChar <= 57) && (currChar >= 65 && currChar <= 90) && (currChar >= 97 && currChar <= 122)){
            return true;
        }
           
    }
function isConsistedByAtLeastTwoDigits(password){
    let digitCounter = 0;
    for(let currCharIndex of password){
        let currChar = currCharIndex.charCodeAt(0);
        if(currChar >= 48 && currChar <= 57){
            digitCounter++
        }

        if(digitCounter >= 2){
            return true;
        }
    }
}

let isLengthValid = isLongEnough(password);
let isOnlyLettersAndDigits = isOnlyOfLettersAndDigits(password);
let isOfAtLeastTwoDigits = isConsistedByAtLeastTwoDigits(password);

if(isLengthValid && isOnlyLettersAndDigits && isOfAtLeastTwoDigits){
    console.log("Password is valid");
}
if(!isLengthValid){
    console.log("Password must be between 6 and 10 characters");
}
if(!isOnlyLettersAndDigits){
    console.log("Password must consist only of letters and digits");
}
if(!isOfAtLeastTwoDigits){
    console.log("Password must have at least 2 digits");
}

}
}
passwordValidator('MyPass123')