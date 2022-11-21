function maxNumber(array){
let topInteger = [];
for(let index = 0 ; index < array.length ; index++){
    let currentElement = array[index];
    let isTopInteger = true;

    for(let j = index + 1; j <array.length; j++){
        let nextElement = array[j];

        if(currentElement <= nextElement){
            isTopInteger = false;
            break ;
        }
    }
    if(isTopInteger){
    topInteger.push(currentElement);
    }
    }
    console.log(topInteger.join(' '))
}
maxNumber([1, 4, 3, 2])