function commonElements(arrayOne , arrayTwo){
for(let index = 0; index < arrayOne.length; index++){
    for(let j = 0; j < arrayTwo.length ; j++){
        if (arrayOne[index] === arrayTwo[j]){
            console.log(arrayOne[index]);
        }
    }
}
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)