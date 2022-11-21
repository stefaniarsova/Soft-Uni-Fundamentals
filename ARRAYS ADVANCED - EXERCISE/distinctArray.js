function distinctArray (array){

    for(let index = 0; index < array.length; index++){
        let currElement = array[index];
        for(let j = index + 1; j < array.length; j++){
            let nextElement = array[j];
            if(currElement === nextElement){
                array.splice(j , 1);
                j = j - 1
            }
        }
    }
console.log(array.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])