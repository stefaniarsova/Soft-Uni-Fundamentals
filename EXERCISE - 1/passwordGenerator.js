function passwordGenerator(input){
let password = input[0].concat(input[1]);
let thirdWord = input[2].toUpperCase();

let vowels = ['a' , 'e' , 'o', 'u' ,'i'];
let count = 0;

for(let i = 0; i < password.length; i++){
    if(vowels.includes(password[i])){
        password = password.replace(password[i],thirdWord[count]);
        count++;
        if(count >= thirdWord.length){
            count = 0;
        }
    }
}
let reversedPassword = password.split('').reverse().join('');
console.log(`Your generated password is ${reversedPassword}`);
}
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])