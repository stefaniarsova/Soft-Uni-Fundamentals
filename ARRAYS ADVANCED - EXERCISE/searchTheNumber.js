function searchTheNumber(array1 , array2) {
let elementsToTake = array2[0];
let elementsToDelete = array2[1];
let searchedNumber = array2[2];
let counter = 0;
let takenElements = array1.splice(0,elementsToTake);
    takenElements.splice(0,elementsToDelete);

    for(let i = 0; i < takenElements.length; i++){
        let number = takenElements[i];
        if(number == searchedNumber){
            counter++
        }
    }
    
console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchTheNumber([7, 1, 5, 8, 2, 7],
[3, 1, 5])
