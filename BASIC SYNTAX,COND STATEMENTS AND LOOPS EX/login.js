function login (input) {
let username = input[0];
let correctPassword = username.split('').reverse().join('');
let count = 0;

for(let i = 1; i < input.length; i++){
    count++;
   if(correctPassword === input[i]){
       console.log(`User ${username} logged in.`);
   }else{
       if(count === 4){
        console.log(`User ${username} blocked!`);
        break ;
    }
    console.log(`Incorrect password. Try again.`);
   }
}


}

login(['sunny','rainy','cloudy','sunny','not sunny'])