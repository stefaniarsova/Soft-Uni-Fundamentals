function storeProvision(currentStock , deliveredStock){

    let storeStock = {};

    for(let i = 0; i < currentStock.length; i+=2){
        let currentProduct = currentStock[i];
        storeStock[currentProduct] = Number(currentStock[i+1]);
    }

    for(let j = 0; j < deliveredStock.length; j+=2){
        let currentProduct = deliveredStock[j];
        if(!storeStock.hasOwnProperty(currentProduct)){
            storeStock[currentProduct] = 0;
        }
        storeStock[currentProduct] += Number(deliveredStock[j+1]);
    }

    for (let key in storeStock) {
        console.log(`${key} -> ${storeStock[key]}`);
    }

}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])