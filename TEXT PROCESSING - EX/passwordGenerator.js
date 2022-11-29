function passwordGenerator(input){
let [firstString , secondString , thirdString] = input
let concatPass = firstString.concat(secondString);
thirdString = thirdString.toUpperCase();

for(let element of concatPass){
    if(element === 'a' || element === 'e'|| element === 'i' || element === 'o' || element === 'u'){

        for(let char of thirdString){
            
        }
    }
}





}
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])