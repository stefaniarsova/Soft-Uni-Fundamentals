function piccolo(input){
    let result = new Set();

    for(let line of input){
        let [command , carNumber] = line.split(', ');
        
        if(command === 'IN'){
            result.add(carNumber);
        }else if(command === 'OUT'){
            result.delete(carNumber);
        }
    }

    if(result.size == 0){
        console.log("Parking Lot is Empty");
    }else {
        let parking = Array.from(result).sort();

        for(let car of parking){
            console.log(car);
        }
    }

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)