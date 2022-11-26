function vacation(peopleCount, groupType , dayOfWeek){
    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.9;
    let regularFridayPrice = 15;
    let studentsSaturdayPrice = 9.8;
    let businessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.5;
    
    let totalPrice = 0;

    let studentsDiscountPercentage = 15;
    let businessDiscountPeople = 10;
    let regularDiscountPercentage = 5;

    if(groupType === "Business" && peopleCount >= 100){
        peopleCount -= businessDiscountPeople ;
    }

    switch(groupType){
        case "Business":  
           switch(dayOfWeek){
               case("Friday"): 
               totalPrice += peopleCount * businessFridayPrice;
               break ;
               case("Saturday"):
               totalPrice += peopleCount * businessSaturdayPrice;
               break ;
               case("Sunday"):
               totalPrice += peopleCount * businessSundayPrice;
               break ;
           }
        break ;
        case "Students": 
        switch(dayOfWeek){
            case("Friday"):
            totalPrice += peopleCount * studentsFridayPrice;
            break ;
            case("Saturday"):
            totalPrice += peopleCount * studentsSaturdayPrice;
            break ;
            case("Sunday"):
            totalPrice += peopleCount * studentsSundayPrice;
            break ;
        }
        break ;
        case "Regular": 
        switch(dayOfWeek){
            case("Friday"):
            totalPrice += peopleCount * regularFridayPrice;
            break ;
            case("Saturday"):
            totalPrice += peopleCount * regularSaturdayPrice;
            break ;
            case("Sunday"):
            totalPrice += peopleCount * regularSundayPrice;
            break ;
        }
        ;break ;
    }
    
    if(groupType === "Students" && peopleCount >= 30){
        totalPrice -= totalPrice * (studentsDiscountPercentage/100);
    }

    if(groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20){
        totalPrice -= totalPrice * (regularDiscountPercentage/100);       
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(40,
    "Regular",
    "Saturday"
    )