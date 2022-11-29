function passwordValidator(password) {

    function isLongEnough (stringPassword){
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }

    function isOnlyDigitsAndNumbers (stringPassword){
        for (let currentCharIndex of stringPassword) {
            let currentCharCode = currentCharIndex.charCodeAt(0);
            if (
              !(currentCharCode >= 65 && currentCharCode <= 90) &&
              !(currentCharCode >= 97 && currentCharCode <= 122) &&
              !(currentCharCode >= 48 && currentCharCode <= 57)
            ) {
              return false;
            }
          }
          return true;
        }

    function isHavingAtLeastTwoDigits(stringPassword){
        let count = 0;
        for(let charIndex of stringPassword){
            let currChar = charIndex.charCodeAt(0);
            if((currChar>= 48 && currChar <= 57)){
                count++;
            }
        }
        return count >= 2 ? true : false ;
    }

    let isLengthValid = isLongEnough(password);
    let isDigitsAndNumbersOnly = isOnlyDigitsAndNumbers(password);
    let isContainingAtLeastTwoDigits = isHavingAtLeastTwoDigits(password);

    if(isLengthValid && isDigitsAndNumbersOnly && isContainingAtLeastTwoDigits){
    console.log('Password is valid')
    }

    if(!isLengthValid){
        console.log('Password must be between 6 and 10 characters');
    }

    if(!isDigitsAndNumbersOnly){
        console.log('Password must consist only of letters and digits');
    }
    if(!isContainingAtLeastTwoDigits){
        console.log('Password must have at least 2 digits');
    }

}
passwordValidator('logIn')
