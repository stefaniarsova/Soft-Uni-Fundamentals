function mergeArrays (arrayOne , arrayTwo){
let arrayThree = []
   for(let index = 0; index < arrayOne.length ; index++){
       if(index % 2 === 0){
           arrayThree.push(Number(arrayOne[index]) + Number(arrayTwo[index]));
       }else {
           arrayThree.push(`${arrayOne[index]}${arrayTwo[index]}`);
       }
   }
   console.log(arrayThree.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)