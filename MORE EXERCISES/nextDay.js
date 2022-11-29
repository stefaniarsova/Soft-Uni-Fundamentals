function nextDay(year , month , day){

for(let i = 0; i < 1; i++){
    let newDay = day + 1;
    let newMonth = month;
    let newYear = year;

    if(year < 1900){
        newYear = 1900 + year
    }

    switch(month){
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if(newDay > 31){
            newDay = 1;
            newMonth = month + 1;
            if (newMonth > 12) {
                newMonth = 1;
                newYear = year + 1;
            }
        }
    break ;
    case 2: 
    if(year % 4 === 0){
        if(newDay > 29){
            newDay = 1;
            newMonth = month + 1;
            if (newMonth > 12) {
                newMonth = 1;
                newYear = year + 1;
            }
        }
    }else {
        if(newDay > 28){
            newDay = 1;
            newMonth = month + 1;
            if (newMonth > 12) {
                newMonth = 1;
                newYear = year + 1;
            }
        }

    }
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        if(newDay > 30){
            newDay = 1;
            newMonth = month + 1;
            if (newMonth > 12) {
                newMonth = 1;
                newYear = year + 1;
            }
        }
    break ;
    }

console.log(`${newYear}-${newMonth}-${newDay}`)
}
}


nextDay(1,
1,
1)