function orders2 (product , quantity){
result (product,quantity); 

function result(product , quantity) {
    let price = 0;

    switch(product){
    case 'coffee': price = 1.50; 
    break;
    case 'water' : price = 1;
    break;
    case 'coke' : price = 1.40;
    break;
    case 'snacks': price = 2;
    break ;
    }
    let result = price * quantity
    console.log(result.toFixed(2));
}

}
orders2('water' , 5)
